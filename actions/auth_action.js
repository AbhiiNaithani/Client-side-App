export const saveProduct = ({productInfo}) => async (dispatch) => { 
    try { 
      const response = await fetch(`${API_URI}/saveproduct`, { 
        method: 'POST', 
        headers: { 
          Accept: 'application/json', 
                'Content-Type': 'application/json' 
              }, 
              body: JSON.stringify({ 
               productInfo            }) 
            }); 
            const json = await response.json(); 
            if(json.success === true){  
             console.log('Product Saved'); 
        } 
        return json; 
      } catch (error) { 
        return {"msz": "Something went wrong", "success": false, "userID": ""} 
      } 
    };