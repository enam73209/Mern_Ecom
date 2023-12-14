const {ProductBrandListService, ProductCategoryListService, ProductSliderListService, ProductListByBrandService, ProductListByCategoryService,
    ProductListBySimilarService, ProductListByKeywordService, ProductListByRemarkService, ProductDetailsService,
    ProductReviewListService} = require('../services/ProductServices');
exports.ProductBrandList = async (req,res)=>{
    let result = await ProductBrandListService();
    return res.status(200).json(result);
}
exports.ProductCategoryList = async (req,res)=>{
    let result = await ProductCategoryListService();
    return res.status(200).json(result);
}

exports.ProductSliderList = async (req,res)=>{
    let result = await ProductSliderListService();
    return res.status(200).json(result);
}

exports.ProductListByBrand = async (req,res)=>{
    let result = await ProductListByBrandService(req);
    return res.status(200).json(result);
}

exports.ProductListByCategory = async (req,res)=>{
    let result = await ProductListByCategoryService(req);
    return res.status(200).json(result);
}

exports.ProductListBySimilar = async (req,res)=>{

}
exports.ProductListByKeyword = async (req,res)=>{

}

exports.ProductListByRemark = async (req,res)=>{

}
exports.ProductDetails = async (req,res)=>{

}
exports.ProductReviewList = async(req,res)=>{

}


