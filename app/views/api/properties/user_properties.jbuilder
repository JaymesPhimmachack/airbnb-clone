json.user_properties do
  json.array! @user_properties,
    :id,  
    :title,  
    :description,  
    :image_url
end