class StaticPagesController < ApplicationController
  def home
    render 'home'
  end
  def property
    @data = { property_id: params[:id] }.to_json
    render 'property'
  end
  def login
     @data = { type: params[:type] }.to_json
    render 'login'
  end
  def trips
    @data = { user_id: params[:user_id] }.to_json
    render 'trips'
  end
  def listings
     @data = { user_id: params[:user_id] }.to_json
    render 'listings'
  end  
  def success
    @data = { property_id: params[:id] }.to_json
    render 'success'
  end
end
