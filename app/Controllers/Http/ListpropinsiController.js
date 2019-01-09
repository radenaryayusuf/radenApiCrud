'use strict'

const Listpropinsi = use('App/Models/Listpropinsi')

class ListpropinsiController {
 
 async index ({ request, response}) {
    const results = await Listpropinsi.all()
    response.json(results)
  } 
  
 async store ({ request, response }) {
     try{
      const result = await Listpropinsi.create(request.all())
      response.json({success:true, message:'Inserted was Successful'})
    }catch(e){
      response.json({success:false, message: e.message})
    }
  }
  
 async show ({ params, request, response}) {
    const result = await Listpropinsi.findBy('id', params.id)
    response.json(result)
  }
  async showbyname ({ params, request, response}) {
    const result = await Listpropinsi.findBy('Nama_Propinsi', params.Nama_Propinsi)
    response.json(result)
  }
  async update ({ params, request, response }) {
    try{
    const result = await Listpropinsi.query().where('id',params.id).update(request.all())
    response.json({success:true, message:'Propinsi Data has Updated'})
    }catch(e){
    response.json({success:false, message:e.message})
    }
  }
  async destroy ({ params, request, response }) {
    try{
    const result = await Listpropinsi.find(params.id)
    result.delete()
    response.json({success:true, message:'Propinsi has Deleted'})
    }catch(e){
    response.json({success:false, message:e.message})
    }
  }
  
}

module.exports = ListpropinsiController
