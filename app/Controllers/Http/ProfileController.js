'use strict'

const Profile = use('App/Models/Profile')

class ProfileController {
  
  async index ({ request, response}) {
    const results = await Profile.all()
    response.json(results)
  } 



  
  async store ({ request, response }) {
     try{
      const result = await Profile.create(request.all())
      response.json({success:true, message:'Inserted was Successful'})
    }catch(e){
      response.json({success:false, message: e.message})
    }
  }

 
  async show ({ params, request, response}) {
    const result = await Profile.findBy('id', params.id)
    response.json(result)
  }

  
 
  async update ({ params, request, response }) {
    try{
    const result = await Profile.query().where('id',params.id).update(request.all())
    response.json({success:true, message:'Profile Data has Updated'})
    }catch(e){
    response.json({success:false, message:e.message})
    }
  }

  
  async destroy ({ params, request, response }) {
    try{
    const result = await Profile.find(params.id)
    result.delete()
    response.json({success:true, message:'Profile has Deleted'})
    }catch(e){
    response.json({success:false, message:e.message})
    }
  }
}

module.exports = ProfileController
