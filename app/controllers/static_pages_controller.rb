class StaticPagesController < ApplicationController
  def home
    render 'home'
  end
  def property
    @data = { property_id: params[:id] }.to_json
    render 'property'
  end
  def login
    render 'login'
  end
  def success
    @data = { property_id: params[:id] }.to_json
    render 'api/bookings/show', status: :ok
  end
end
