module Api
  class PropertiesController < ApplicationController
    
    def create
      token = cookies.signed[:airbnb_session_token]
      session = Session.find_by(token: token)
      user = session.user
      property = user.properties.new(property_params)
      if property.save
        render 'api/properties/create', status: :ok
      else
        render json: { success: false }, status: :bad_request
      end
    end
    
    def index
      @properties = Property.order(created_at: :desc).page(params[:page]).per(6)
      return render json: { error: 'not_found' }, status: :not_found if !@properties
      render 'api/properties/index', status: :ok
    end
    
    def show
      @property = Property.find_by(id: params[:id])
      return render json: { error: 'not_found' }, status: :not_found if !@property
      render 'api/properties/show', status: :ok
    end
    
    def edit
       @property = Property.find_by(id: params[:id])
      return render json: { error: 'not_found' }, status: :not_found if !@property
      render 'api/properties/edit', status: :ok
    end  
    
    def index_by_user
       @user_properties = Property.where(user_id: params[:user_id])
       return render json: { error: 'not_found' }, status: :not_found if !@user_properties
       render 'api/properties/user_properties', status: :ok
    end
    
    def destroy
       token = cookies.signed[:twitter_session_token]
      session = Session.find_by(token: token)

      return render json: { success: false }, status: :bad_request unless session

      username = session.user
      property = Property.find_by(id: params[:id])
          render json: { success: {user: username, property: property} }
      #if property and property.username == username and property.destroy
        #render json: { success: true }, status: :ok
      #else
        #render json: { success: false}, status: :bad_request
      #end
    end
    
    def property_params
        params.require(:property).permit(:title,:description,:city,:country,:property_type,:image_url,:price_per_night,:max_guests,:bedrooms,:beds,:baths)
    end
  end
end