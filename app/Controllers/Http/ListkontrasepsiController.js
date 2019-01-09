'use strict'

const Listkontrasepsi = use('App/Models/Listkontrasepsi')

class ListkontrasepsiController {

  async index ({ request, response}) {
    const results = await Listkontrasepsi.all()
    response.json(results)
  } 

async store ({ request, response }) {
     try{
      const result = await Listkontrasepsi.create(request.all())
      response.json({success:true, message:'Inserted was Successful'})
    }catch(e){
      response.json({success:false, message: e.message})
    }
  }
 
 async show ({ params, request, response}) {
    const result = await Listkontrasepsi.findBy('id', params.id)
    response.json(result)
  }
  async showbyname ({ params, request, response}) {
    const result = await Listkontrasepsi.findBy('Nama_Kontrasepsi', params.Nama_Kontrasepsi)
    response.json(result)
  }
  
}

module.exports = ListkontrasepsiController
