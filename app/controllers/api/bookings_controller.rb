module Api
  class BookingsController < ApplicationController
    def create
      token = cookies.signed[:airbnb_session_token]
      session = Session.find_by(token: token)
      return render json: { error: 'user not logged in' }, status: :unauthorized if !session
      property = Property.find_by(id: params[:booking][:property_id])
      return render json: { error: 'cannot find property' }, status: :not_found if !property
      begin
        @booking = Booking.create({ user_id: session.user.id, property_id: property.id, start_date: params[:booking][:start_date], end_date: params[:booking][:end_date]})
        render 'api/bookings/create', status: :created
      rescue ArgumentError => e
        render json: { error: e.message }, status: :bad_request
      end
    end
    
    def index_by_user
      @trips = Booking.joins(:property).select(:title, :start_date, :end_date, :id, :description, :image_url, :property_id)
       #@trips = Booking.joins(:property, :charges).select(:title, :currency, :amount, :completed, :start_date, :end_date, :id, :description, :image_url, :property_id)
      # @trips.merge(Charge.pluck(:complete))
       #@charges = Charge.find_by()
       charge = Charge.all
       render json: { trips: charge  }
     #render 'api/bookings/show', status: :ok
    end  
    
    def get_property_bookings
      property = Property.find_by(id: params[:id])
      return render json: { error: 'cannot find property' }, status: :not_found if !property
      @bookings = property.bookings.where("end_date > ? ", Date.today)
      render 'api/bookings/index'
    end
    
    def get_booked_properties
     # properties = Property.where(user_id: params[:user_id])
      #bookings = Booking.where(user_id: params[:user_id])
      #user = User.find_by(id: params[:user_id])
      booking = Booking.last
     
      #@properties_listing = []
      #properties.each do |property|
       #             bookings.each do |booking|
        #             if property.id == booking.property_id
         #              @properties_booked.push({
          #               id: booking.id,
           #              start_date: booking.start_date,
            #             end_date: booking.end_date,
             #            complete: booking.complete,
              #           property_id: property.id,
               #          title: property.title,
                #         description: property.description,
                 #        image_url: property.image_url,
                  #       username: user.username,
                   #      email: user.email
                    #   })
                    #  end
                  #  end  
              #  end      
                
      #return render json: { error: 'cannot find properties' }, status: :not_found if !properties
      render json: { trips: 'hello' }
      #render 'api/bookings/booked_properties'
    end
    
    private
    def booking_params
      params.require(:booking).permit(:property_id, :start_date, :end_date)
    end
  end
end