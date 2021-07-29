const getPagination = (page) => {
    const limit = 6;
    const offset = page ? page * limit : 0;

    return {
        offset,
        limit
    };
};

const getPagingData = (data, page, limit) => {
    const {
        count: totalArticles,
        rows: articles
    } = data;
    const currentPage = page ? +page : 0;
    const totalPages = Math.ceil(totalArticles / limit);

    return {
        totalArticles,
        articles,
        totalPages,
        currentPage
    };
};

module.exports = {
    getPagination,
    getPagingData
}