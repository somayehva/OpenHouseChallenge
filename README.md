To run the client on your local machine, run the following commands in your terminal:  
1. `npm install`  
2. `npm run dev`

NOTE: The API endpoints at  `https://storage.googleapis.com/openhouse-ai-fe-coding-test/*` had strict CORS enabled on the server. This made it difficult to make `fetch` requests from the client to get the JSON data. As a quick fix, I downloaded and included the data locally, as part of the React app. Ideally, the CORS settings on the server should allow requests from the origin where this React app is hosted.  
  
NOTE: The `imgUrl` provided for some of the communities by the "Get Communities" endpoint were missing or had invalid URL. This leads to some of the communities missing images.

  
  
**If given more time, how would you improve the quality of your application? Would you implement anything differently?**  
I would spend more time creating a more appealing UI/UX. Currently the front-end is very simple and minimalistic with few features. If I had more time, I would work on adding a search button where the users can search or filter for a specific community. Another useful feature is to allow the user to select how to sort the communities. Currently it's only based on alphabetic order. Users may want to order the list of communities based on ascending or descending average house prices. They may also want to filter based on the region the community is in, for example NW vs SW, or even the city.


