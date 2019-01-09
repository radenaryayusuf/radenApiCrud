'use strict'

const ListPemakaiKontrasepsi = use('App/Models/ListPemakaiKontrasepsi')

class ListPemakaiKontrasepsiController {
  
  async index ({ request, response}) {
    const results = await ListPemakaiKontrasepsi.all()
    response.json(results)
  } 

  
  async store ({ request, response }) {
     try{
      const result = await ListPemakaiKontrasepsi.create(request.all())
      response.json({success:true, message:'Inserted was Successful'})
    }catch(e){
      response.json({success:false, message: e.message})
    }
  }

 
  async show ({ params, request, response}) {
    const result = await ListPemakaiKontrasepsi.findBy('id', params.id)
    response.json(result)
  }

  async destroy ({ params, request, response }) {
    try{
    const result = await ListPemakaiKontrasepsi.find(params.id)
    result.delete()
    response.json({success:true, message:'Pemakai has Deleted'})
    }catch(e){
    response.json({success:false, message:e.message})
    }
  }
}

module.exports = ListPemakaiKontrasepsiController
