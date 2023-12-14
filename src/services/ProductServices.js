const BrandModel = require('../models/BrandModel');
const CategoryModel = require('../models/CategoryModel');
const ProductSliderModel = require('../models/ProductSliderModel');
const ProductModel = require('../models/ProductModel');
const ProductDetailModel = require('../models/ProductDetailModel');
const ReviewModel = require('../models/ReviewModel');
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
const ProductBrandListService = async (req,res)=>{
    try{
        let data= await BrandModel.find();
        return{ status:"success", data:data}
    }catch (e) {
         return {status:"fail",data: e}.toString()
    }
}
const ProductCategoryListService = async (req,res)=>{
    try{
        let data= await CategoryModel.find();
        return{ status:"success", data:data}
    }catch (e) {
        return {status:"fail",data: e}.toString()
    }
}

const ProductSliderListService = async (req,res)=>{
    try{
        let data= await ProductSliderModel.find();
        return{ status:"success", data:data}
    }catch (e) {
        return {status:"fail",data: e}.toString()
    }
}

const ProductListByBrandService = async (req)=>{
    try{
           let BrandId =new ObjectId(req.params.BrandID);
           let matchStage = {$match:{brandID: BrandId}};
           let joinWithBrandStage = { $lookup:{from: 'brands' ,localField:'brandID', foreignField:"_id",as:"brand"}};
           let joinWithCategoryStage = {$lookup:{ from:"categories", localField:"categoryID", foreignField:"_id", as:"category"}};
           let ProjectionStage = {$project:{'categoryID':0,'brandID':0, 'brand._id':0, 'category._id':0}}
           let data = await ProductModel.aggregate([
               matchStage,
               joinWithBrandStage,
               joinWithCategoryStage,
               ProjectionStage
           ]);
           return { status:"success", data: data}
    }catch (e) {
            return {status:"fail", data:e.toString()};
    }
}

const ProductListByCategoryService = async (req)=>{
    try{
        let CategoryId =new ObjectId(req.params.CategoryID);
        let matchStage = {$match:{categoryID: CategoryId}};
        let joinWithCategoryStage = {$lookup:{from:'categories', localField:'categoryID', foreignField:'_id',as:'category'}};
        let joinWithBrandStage = {$lookup:{from: 'brands', localField:'brandID', foreignField:'_id', as:'brand'}};
        let ProjectionStage = {$project:{'categoryID':0,'brandID':0, 'brand._id':0, 'category._id':0}}
        let data = await ProductModel.aggregate([
            matchStage,
            joinWithCategoryStage,
            joinWithBrandStage,
            ProjectionStage
        ]);
        return { status:"success", data: data};
    }catch (e) {
        return {status:"fail", data: e.toString()}
    }


}

const ProductListBySimilarService = async (req,res)=>{

}

const ProductListByKeywordService = async (req,res)=>{

}

const ProductListByRemarkService = async (req,res)=>{

}

const ProductDetailsService = async (req,res)=>{

}

const ProductReviewListService = async (req,res)=>{

}

module.exports={
    ProductBrandListService,
    ProductCategoryListService,
    ProductSliderListService,
    ProductListByBrandService,
    ProductListByCategoryService,
    ProductListBySimilarService,
    ProductListByKeywordService,
    ProductListByRemarkService,
    ProductDetailsService,
    ProductReviewListService
}