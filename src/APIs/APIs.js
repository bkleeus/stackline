export default class APIs {
    static fetchProduct() {
        const products = require('../data/stackline_frontend_assessment_data_2021.json') || [];
        return products[0];
    }
}