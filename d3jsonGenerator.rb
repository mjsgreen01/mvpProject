
# CONVERT THIS FILE TO USE JAVASCRIPT

# get array of unique collab artists -- maybe dont make unique so we can show volume of collabs
def generateD3json(artist)
  links = [];
  nodes = [];
  
  # THIS DOES RETURN ALL COLLABORATIONS (CONFIRMED)
  collabsArray = artist.songs.map{|i| i.artists}.flatten.map{|c| c.name}.uniq{|o| o}  
  .select{|u| u != artist.name} #filters out the artist that was searched for
  # add the searched-for artist to an object as the 'primary' artist
  # and the rest of the artists as a 'collabs' property on that object

  # once results are returned to client side, loop through the artists
    # add each artist as the key of an object, 
      # increment it's value each time we hit that artist

  # create link mapping for D3
  collabsArray.each{|i| links.push({"source"=>1, "target"=>collabsArray.index(i)})}
  # create node mapping for D3
  nodes = collabsArray.map{|name|  {"name" => name, "group" => 1 }  }

  jsonData = {"nodes"=>nodes, "links"=>links}

end

jsonData = generateD3json(Artist.first)
prettyjson = JSON.pretty_generate(jsonData)
File.write("testD3json.json", prettyjson)

# *******************
# *********************************************************
# http://bl.ocks.org/dbuezas/9572040
# *********************************************************
# *******************

# dump sql files to create JS-based app DB (mysql??)(yes, mysql., or another relational DB)
# use node, express, bookstrap(?, or sequelize) on backend
  # use the 'D3test' app in 'coding' dir. as a starting point
    # it has gulp, and basic structure
    # instead of D3 reading json from a file, use the data returned from the query
  # route get(*) (name of the artist) and do db query with that name
  # rewrite this file to use js-based ORM of choice
  # send response to client, where D3 interprets it and does its magic
# use... backbone? on frontend ()
