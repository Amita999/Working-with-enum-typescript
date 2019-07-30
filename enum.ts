enum userLocation {'india','usa','Nz'};
function UserDetails()
{
     var details =
    [
        {
            id:1,
            name:'Priyanka',
            location:userLocation.usa,
            avl:false

        },
        {
            id:2,
            name:'Neha',
            location:userLocation.india,
            avl:false
        },
        {
            id:3,
            name:'Raina',
            location:userLocation.Nz,
            avl:true
        }
        ];
    return details;
};


var storeDetails = UserDetails();



function getLocation(Area:userLocation):Array<string>
{
    console.log(`Country : ${Area}`);//returns index
    console.log(`Country : ${userLocation[Area]}`);//reeturns value
    let userData:string[] = [];
   
    for(let s of storeDetails)
    {
        if(s.avl){
            userData.push(s.id+" "+s.name);
            break;
        };
        
    };
    console.log(userData);
    return userData;
};


getLocation(userLocation.usa);