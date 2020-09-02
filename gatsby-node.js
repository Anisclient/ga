const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const queryResultsPage = await graphql(`
    {
      Sections: xxxSections {
        id
        section
      }
      Products: xxxProducts {
        image
        id
        price
        rating
        title
        sections_id
      }
    }
  `);

  const pageTemplate = path.resolve(`src/templates/temp-page.js`);
  const templateProduct = path.resolve(`src/templates/temp-product.js`);

  queryResultsPage.data.Sections.forEach(page => {
    createPage({
      path: `/${page.section}`,
      component: pageTemplate,
      context: {
        page,
        // all: 'all',
        // headerText: `${page.section}`,
      },
    });
  });

  queryResultsPage.data.Products.forEach(product => {
    createPage({
      path: `/${product.sections_id}/${product.id}`,
      component: templateProduct,
      context: {
        product,
        // all: 'all',
      },
    });
  });
};
