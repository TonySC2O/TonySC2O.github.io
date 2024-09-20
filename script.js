
let map = L.map('map').setView([9.859, -83.891154],18)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    atributtion: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

let marker = L.marker([9.859537, -83.891856]).addTo(map);
/*
let bounds = [
    [9.859220, -83.8932924], // Esquina inferior izquierda
    [9.859320, -83.891065]  // Esquina superior derecha
  ];
*/
var casas = {
    "type": "FeatureCollection",
    "name": "Casas",
    "crs": {
        "type": "name",
        "properties": {
            "name": "urn:ogc:def:crs:OGC:1.3:CRS84"
        }
    },
    "features": [{
        "type": "Feature",
        "geometry": {
            "type": "Polygon",  // Usamos 'Polygon'
            "coordinates": [[   // Dos niveles de corchetes para un 'Polygon'
                [-83.8930273, 9.8594045], 
                [-83.8930524, 9.8593603], 
                [-83.8930296, 9.8593477], 
                [-83.89309, 9.8592411], 
                [-83.8930376, 9.8592137], 
                [-83.8929486, 9.8593658], 
                [-83.8930138, 9.8594031], 
                [-83.8930273, 9.8594045]
            ]]
        },
        "properties": {
            "building": "house",
            "name": "1"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Polygon",  // También corregimos este 'Polygon'
            "coordinates": [[
                [-83.8929486, 9.8593658], 
                [-83.8930376, 9.8592137], 
                [-83.8929337, 9.8591512], 
                [-83.8928508, 9.8593111], 
                [-83.8929486, 9.8593658]
            ]]
        },
        "properties": {
            "name": "2",
            "building": "house"
        }
    },{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[-83.8929486,9.8593658],[-83.8930376,9.8592137],[-83.8929337,9.8591512],[-83.8928508,9.8593111],[-83.8929486,9.8593658]]]},"properties":{"osm_id":1316593229,"name":"2","building":"house"}},
    {"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[-83.8926655,9.8592042],[-83.8927608,9.8590424],[-83.8926587,9.8589825],[-83.8925627,9.8591415],[-83.8926655,9.8592042]]]},"properties":{"osm_id":1316593230,"name":"5","building":"house"}},
    {"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[-83.8925627,9.8591415],[-83.8926587,9.8589825],[-83.8925994,9.858946],[-83.8925775,9.8589824],[-83.8925466,9.8589643],[-83.892471,9.8590898],[-83.8925627,9.8591415]]]},"properties":{"osm_id":1316593231,"name":"6","building":"house"}},
    {"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[-83.892471,9.8590898],[-83.8925466,9.8589643],[-83.8925652,9.858929],[-83.8924634,9.8588707],[-83.8923683,9.8590316],[-83.892471,9.8590898]]]},"properties":{"osm_id":1316593232,"name":"7","building":"house"}},
    {"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[-83.8930982,9.8594435],[-83.8932037,9.8593626],[-83.8932131,9.8593388],[-83.8931957,9.8592992],[-83.89309,9.8592411],[-83.8930296,9.8593477],[-83.8930524,9.8593603],[-83.8930273,9.8594045],[-83.8930982,9.8594435]]]},"properties":{"osm_id":1316593233,"noname":"yes","garden:type":"residential","leisure":"garden"}},
    {"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[-83.8923683,9.8590316],[-83.8924634,9.8588707],[-83.8923626,9.8588142],[-83.8922738,9.85898],[-83.8923683,9.8590316]]]},"properties":{"osm_id":1316593234,"name":"8","building":"house"}},
    {"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[-83.8922738,9.85898],[-83.8923626,9.8588142],[-83.8922702,9.8587619],[-83.8921765,9.8589298],[-83.8922738,9.85898]]]},"properties":{"osm_id":1316593235,"name":"9","building":"house"}},
    {"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[-83.8921765,9.8589298],[-83.8922702,9.8587619],[-83.8921786,9.8587106],[-83.8920739,9.8588739],[-83.8921765,9.8589298]]]},"properties":{"osm_id":1316593236,"name":"10","building":"house"}},
    {"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[-83.8920739,9.8588739],[-83.8921786,9.8587106],[-83.892081,9.8586566],[-83.891986,9.8588282],[-83.8920739,9.8588739]]]},"properties":{"osm_id":1316593237,"name":"11","building":"house"}},
    {"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[-83.891986,9.8588282],[-83.892081,9.8586566],[-83.8919727,9.858596],[-83.8918742,9.8587643],[-83.8918903,9.8587731],[-83.891986,9.8588282]]]},"properties":{"osm_id":1316593238,"name":"12","building":"house"}},
    {"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[-83.8928508,9.8593111],[-83.8929337,9.8591512],[-83.8928887,9.8591244],[-83.8928698,9.859156],[-83.8928406,9.8591391],[-83.8927636,9.8592597],[-83.8928508,9.8593111]]]},"properties":{"osm_id":1316593239,"name":"3","building":"house"}},
    {"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[-83.8927636,9.8592597],[-83.8928406,9.8591391],[-83.8928698,9.859156],[-83.8928887,9.8591244],[-83.8927608,9.8590424],[-83.8926655,9.8592042],[-83.8927636,9.8592597]]]},"properties":{"osm_id":1316593240,"name":"4","building":"house"}},
    {"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[-83.8918742,9.8587643],[-83.8919727,9.858596],[-83.8918854,9.8585487],[-83.8917897,9.8587166],[-83.8918742,9.8587643]]]},"properties":{"osm_id":1316593241,"name":"13","building":"house"}},
    {"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[-83.8917897,9.8587166],[-83.8918854,9.8585487],[-83.8917904,9.8584932],[-83.8916969,9.8586601],[-83.8917897,9.8587166]]]},"properties":{"osm_id":1316593242,"name":"14","building":"house"}},
    {"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[-83.8916969,9.8586601],[-83.8917904,9.8584932],[-83.8916906,9.8584428],[-83.8916646,9.8584926],[-83.8916143,9.8585891],[-83.8916014,9.8586081],[-83.8916969,9.8586601]]]},"properties":{"osm_id":1316593243,"name":"15","building":"house"}},
    {"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[-83.8916143,9.8585891],[-83.8916646,9.8584926],[-83.8916906,9.8584428],[-83.8916217,9.858408],[-83.8915455,9.8585543],[-83.8916143,9.8585891]]]},"properties":{"osm_id":1316593244,"name":"16","building":"house"}},
    {"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[-83.8916143,9.8585891],[-83.8915455,9.8585543],[-83.8915195,9.8585405],[-83.8914877,9.8586036],[-83.8914575,9.8585889],[-83.8913947,9.8587136],[-83.8914309,9.8587018],[-83.8914683,9.8587018],[-83.8915325,9.8587331],[-83.8916014,9.8586081],[-83.8916143,9.8585891]]]},"properties":{"osm_id":1316593246,"name":"17","building":"house"}},
    {"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[-83.8916969,9.8586601],[-83.8916014,9.8586081],[-83.8915325,9.8587331],[-83.8915272,9.8587524],[-83.8915298,9.858773],[-83.8916168,9.8588156],[-83.8916969,9.8586601]]]},"properties":{"osm_id":1316593247,"name":"18","building":"house"}},
    {"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[-83.8917897,9.8587166],[-83.8917021,9.8588672],[-83.8918017,9.8589243],[-83.8918903,9.8587731],[-83.8918742,9.8587643],[-83.8917897,9.8587166]]]},"properties":{"osm_id":1316593249,"name":"20","building":"house"}},
    {"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[-83.8918017,9.8589243],[-83.8919018,9.8589825],[-83.8919534,9.8588964],[-83.8919473,9.8588929],[-83.891986,9.8588282],[-83.8918903,9.8587731],[-83.8918017,9.8589243]]]},"properties":{"osm_id":1316593250,"name":"21","building":"house"}},
    {"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[-83.8919853,9.8590313],[-83.8920806,9.8590871],[-83.8921371,9.8590069],[-83.8921765,9.8589298],[-83.8920739,9.8588739],[-83.8919853,9.8590313]]]},"properties":{"osm_id":1316593252,"name":"23","building":"house"}},
    {"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[-83.8922775,9.8591929],[-83.8923103,9.8592107],[-83.8923017,9.8592261],[-83.8923428,9.8592483],[-83.8923475,9.8592399],[-83.8923731,9.859256],[-83.892471,9.8590898],[-83.8923683,9.8590316],[-83.8922775,9.8591929]]]},"properties":{"osm_id":1316593254,"name":"25","building":"house"}},
    {"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[-83.8923731,9.859256],[-83.8924604,9.8593045],[-83.8925627,9.8591415],[-83.892471,9.8590898],[-83.8923731,9.859256]]]},"properties":{"osm_id":1316593255,"name":"26","building":"house"}},
    {"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[-83.8924604,9.8593045],[-83.8925661,9.8593654],[-83.8926655,9.8592042],[-83.8925627,9.8591415],[-83.8924604,9.8593045]]]},"properties":{"osm_id":1316593256,"name":"27","building":"house"}},
    {"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[-83.8925661,9.8593654],[-83.892672,9.8594231],[-83.8927636,9.8592597],[-83.8926655,9.8592042],[-83.8925661,9.8593654]]]},"properties":{"osm_id":1316593257,"name":"28","building":"house"}},
    {"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[-83.892672,9.8594231],[-83.8927558,9.8594704],[-83.8928508,9.8593111],[-83.8927636,9.8592597],[-83.892672,9.8594231]]]},"properties":{"osm_id":1316593258,"name":"29","building":"house"}},
    {"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[-83.8927558,9.8594704],[-83.8928521,9.8595279],[-83.892899,9.85945],[-83.8929486,9.8593658],[-83.8928508,9.8593111],[-83.8927558,9.8594704]]]},"properties":{"osm_id":1316593259,"name":"30","building":"house"}},
    {"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[-83.8928521,9.8595279],[-83.8929966,9.8596123],[-83.8930982,9.8594435],[-83.8930273,9.8594045],[-83.8930138,9.8594031],[-83.8929641,9.8594873],[-83.892899,9.85945],[-83.8928521,9.8595279]]]},"properties":{"osm_id":1316593260,"name":"32 y 31","building":"house","description":"Esta casa poseía dos placas de numeración."}},
    {"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[-83.8929288,9.8596581],[-83.8928303,9.8595902],[-83.8927731,9.8596704],[-83.8927948,9.8596876],[-83.8929096,9.8597647],[-83.8929488,9.8596977],[-83.8929288,9.8596581]]]},"properties":{"osm_id":1316593262,"name":"33","building":"house"}},
    {"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[-83.8928977,9.8598237],[-83.8927573,9.8597337],[-83.8927254,9.8597772],[-83.8928673,9.8598705],[-83.8928977,9.8598237]]]},"properties":{"osm_id":1316593263,"name":"35","building":"house"}},
    {"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[-83.8928977,9.8598237],[-83.892918,9.859777],[-83.8929096,9.8597647],[-83.8927948,9.8596876],[-83.8927573,9.8597337],[-83.8928977,9.8598237]]]},"properties":{"osm_id":1316593264,"name":"34","building":"house"}},
    {"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[-83.8927783,9.8595586],[-83.8926858,9.8596859],[-83.8927573,9.8597337],[-83.8927948,9.8596876],[-83.8927731,9.8596704],[-83.8928303,9.8595902],[-83.8927783,9.8595586]]]},"properties":{"osm_id":1316593265,"name":"36","building":"house"}},
    {"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[-83.8927783,9.8595586],[-83.892642,9.859481],[-83.8925296,9.8596305],[-83.8926579,9.8597241],[-83.8926858,9.8596859],[-83.8927783,9.8595586]]]},"properties":{"osm_id":1316593266,"name":"37","building":"house"}},
    {"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[-83.8925296,9.8596305],[-83.8924594,9.8596739],[-83.892571,9.8598433],[-83.8926579,9.8597241],[-83.8925296,9.8596305]]]},"properties":{"osm_id":1316593267,"name":"38","building":"house"}},
    {"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[-83.8924594,9.8596739],[-83.8924194,9.859671],[-83.8924208,9.8598482],[-83.892571,9.8598433],[-83.8924594,9.8596739]]]},"properties":{"osm_id":1316593268,"name":"39","building":"apartments"}},
    {"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[-83.8924208,9.8598482],[-83.8924194,9.859671],[-83.8923542,9.8596707],[-83.8923534,9.8598472],[-83.8924208,9.8598482]]]},"properties":{"osm_id":1316593269,"name":"40","building":"apartments"}},
    {"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[-83.8923534,9.8598472],[-83.8923542,9.8596707],[-83.8922433,9.8596701],[-83.8922424,9.8598465],[-83.8923534,9.8598472]]]},"properties":{"osm_id":1316593270,"name":"41","building":"house"}},
    {"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[-83.8922433,9.8596701],[-83.8921299,9.8596696],[-83.8921255,9.8598442],[-83.8922424,9.8598465],[-83.8922433,9.8596701]]]},"properties":{"osm_id":1316593271,"name":"42","building":"house"}},
    {"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[-83.8920719,9.8598403],[-83.8920773,9.8596698],[-83.8919693,9.8596568],[-83.8919521,9.8598366],[-83.8920719,9.8598403]]]},"properties":{"osm_id":1316593273,"name":"44","building":"house"}},
    {"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[-83.8914522,9.8592125],[-83.8914398,9.8591293],[-83.891277,9.8591409],[-83.8912241,9.8591789],[-83.8912149,9.8592321],[-83.8912743,9.8592907],[-83.8914522,9.8592125]]]},"properties":{"osm_id":1316593276,"name":"46","building":"house"}},
    {"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[-83.8914398,9.8591293],[-83.8914636,9.8590539],[-83.8912833,9.8590077],[-83.8912241,9.8591789],[-83.891277,9.8591409],[-83.8914398,9.8591293]]]},"properties":{"osm_id":1316593277,"name":"47","building":"house"}},
    {"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[-83.8914636,9.8590539],[-83.891495,9.8589534],[-83.8913125,9.8589122],[-83.8912833,9.8590077],[-83.8914636,9.8590539]]]},"properties":{"osm_id":1316593278,"name":"48","building":"house"}},
    {"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[-83.891495,9.8589534],[-83.8915095,9.8588933],[-83.8915041,9.8588286],[-83.8913553,9.8587532],[-83.8913125,9.8589122],[-83.891495,9.8589534]]]},"properties":{"osm_id":1316593279,"name":"49","building":"house"}},
    {"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[-83.8916399,9.8591306],[-83.8917327,9.8589697],[-83.891619,9.8589074],[-83.8915868,9.8589154],[-83.891564,9.8589418],[-83.8915305,9.859066],[-83.8916399,9.8591306]]]},"properties":{"osm_id":1316593280,"name":"50","building":"house"}},
    {"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[-83.8916399,9.8591306],[-83.8916741,9.8591507],[-83.8917419,9.8591918],[-83.8918358,9.8590287],[-83.8917327,9.8589697],[-83.8916399,9.8591306]]]},"properties":{"osm_id":1316593281,"name":"51","building":"house"}},
    {"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[-83.8917419,9.8591918],[-83.8917802,9.8592131],[-83.8918328,9.8592426],[-83.8919264,9.859083],[-83.8918358,9.8590287],[-83.8917419,9.8591918]]]},"properties":{"osm_id":1316593282,"name":"52","building":"house"}},
    {"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[-83.8918328,9.8592426],[-83.8918684,9.8592624],[-83.8919303,9.8592948],[-83.8920207,9.8591395],[-83.8919264,9.859083],[-83.8918328,9.8592426]]]},"properties":{"osm_id":1316593283,"name":"53","building":"house"}},
    {"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[-83.8919303,9.8592948],[-83.8919449,9.8593032],[-83.8920256,9.8593468],[-83.8921173,9.8591955],[-83.8920207,9.8591395],[-83.8919303,9.8592948]]]},"properties":{"osm_id":1316593284,"name":"54","building":"house"}},
    {"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[-83.8920256,9.8593468],[-83.892115,9.8593887],[-83.892123,9.8593929],[-83.8922046,9.8592423],[-83.8921173,9.8591955],[-83.8920256,9.8593468]]]},"properties":{"osm_id":1316593285,"name":"55","building":"house"}},
    {"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[-83.892123,9.8593929],[-83.8921963,9.8594357],[-83.8922185,9.8594454],[-83.8923037,9.8592934],[-83.8922046,9.8592423],[-83.892123,9.8593929]]]},"properties":{"osm_id":1316593286,"name":"56","building":"house"}},
    {"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[-83.8922185,9.8594454],[-83.8923159,9.8595044],[-83.8924087,9.8593469],[-83.8923037,9.8592934],[-83.8922185,9.8594454]]]},"properties":{"osm_id":1316593287,"name":"57","building":"house"}},
    {"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[-83.8923159,9.8595044],[-83.8922628,9.8595945],[-83.8924384,9.8596038],[-83.892527,9.8594888],[-83.8925363,9.8594452],[-83.8925135,9.8594069],[-83.8924087,9.8593469],[-83.8923159,9.8595044]]]},"properties":{"osm_id":1316593288,"name":"58 y 59","building":"house","description":"Esta casa poseía dos placas de numeración."}},
    {"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[-83.8923159,9.8595044],[-83.8922185,9.8594454],[-83.8921963,9.8594357],[-83.8921059,9.8595866],[-83.8922628,9.8595945],[-83.8923159,9.8595044]]]},"properties":{"osm_id":1316593289,"name":"60","building":"house"}},
    {"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[-83.8921059,9.8595866],[-83.8921963,9.8594357],[-83.892123,9.8593929],[-83.892115,9.8593887],[-83.8919959,9.8595839],[-83.8921059,9.8595866]]]},"properties":{"osm_id":1316593290,"name":"61","building":"house"}},
    {"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[-83.8919959,9.8595839],[-83.892115,9.8593887],[-83.8920256,9.8593468],[-83.8918993,9.8595787],[-83.8919959,9.8595839]]]},"properties":{"osm_id":1316593291,"name":"62","building":"house"}},
    {"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[-83.8918993,9.8595787],[-83.8920256,9.8593468],[-83.8919449,9.8593032],[-83.8918323,9.8594954],[-83.8918993,9.8595787]]]},"properties":{"osm_id":1316593292,"name":"63","building":"house"}},
    {"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[-83.8918323,9.8594954],[-83.8919449,9.8593032],[-83.8919303,9.8592948],[-83.8918684,9.8592624],[-83.8917733,9.8594293],[-83.8918323,9.8594954]]]},"properties":{"osm_id":1316593293,"name":"64","building":"house"}},
    {"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[-83.8917733,9.8594293],[-83.8918684,9.8592624],[-83.8918328,9.8592426],[-83.8917802,9.8592131],[-83.8916995,9.859354],[-83.8917733,9.8594293]]]},"properties":{"osm_id":1316593294,"name":"65","building":"house"}},
    {"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[-83.8916995,9.859354],[-83.8917802,9.8592131],[-83.8917419,9.8591918],[-83.8916741,9.8591507],[-83.8916123,9.8592523],[-83.8916995,9.859354]]]},"properties":{"osm_id":1316593295,"name":"66","building":"house"}},]
};

var styleLotes = {
    "color": "#964B00",
    "weight": 3,
    "opacity": 0.65
};

var lotes = {
    "type": "FeatureCollection",
    "name": "Lotes",
    "crs": {
        "type": "name",
        "properties": {
            "name": "urn:ogc:def:crs:OGC:1.3:CRS84"
        }
    },
    "features": [{
        "type":"Feature",
        "geometry":{
            "type":"Polygon",
            "coordinates":[[[-83.8916168,9.8588156],[-83.8917021,9.8588672],[-83.8917897,9.8587166],[-83.8916969,9.8586601],[-83.8916168,9.8588156]]]
        },
        "properties":{"osm_id":1316593248,
                      "name":"19", 
                      "place":"plot"
        }
    }, {
        "type":"Feature","geometry":{"type":"Polygon",
            "coordinates":[[[-83.8919018,9.8589825],[-83.8919853,9.8590313],[-83.8920739,9.8588739],[-83.891986,9.8588282],[-83.8919473,9.8588929],[-83.8919534,9.8588964],[-83.8919018,9.8589825]]]},
            "properties":{"osm_id":1316593251,
                "name":"22",
                "place":"plot"}
    }, {
        "type":"Feature","geometry":{"type":"Polygon",
            "coordinates":[[[-83.8920806,9.8590871],[-83.8922775,9.8591929],[-83.8923683,9.8590316],[-83.8922738,9.85898],[-83.8921765,9.8589298],[-83.8921371,9.8590069],[-83.8920806,9.8590871]]]},
            "properties":{"osm_id":1316593253,"name":"24","place":"plot"}
    }, {
        "type":"Feature","geometry":{"type":"Polygon",
            "coordinates":[[[-83.8921255,9.8598442],[-83.8921299,9.8596696],[-83.8920773,9.8596698],[-83.8920719,9.8598403],[-83.8921255,9.8598442]]]},
            "properties":{"osm_id":1316593272,"name":"43","place":"plot"}
    }, {
        "type":"Feature","geometry":{"type":"Polygon",
            "coordinates":[[[-83.8919521,9.8598366],[-83.8919693,9.8596568],[-83.891885,9.8596491],[-83.8918207,9.8595969],[-83.8917496,9.8596821],[-83.8917415,9.8597442],[-83.8919521,9.8598366]]]},
            "properties":{"osm_id":1316593274,"name":"45","place":"plot"}
    }]
}

var styleZonasVerdes = {
    "color": "#1E8900",
    "weight": 3,
    "opacity": 1
};

var ZonasVerdes = {
    "type": "FeatureCollection",
    "name": "ZonasVerdes",
    "crs": {
        "type": "name",
        "properties": {
            "name": "urn:ogc:def:crs:OGC:1.3:CRS84"
        }
    },
    "features": [{
        "type":"Feature","geometry":{"type":"Polygon","coordinates":[[[-83.8915455,9.8585543],[-83.8916217,9.858408],[-83.8915377,9.8583662],[-83.8914616,9.8585111],[-83.8915195,9.8585405],[-83.8915455,9.8585543]]]},"properties":{"osm_id":1316593245,"noname":"yes","garden:type":"residential","leisure":"garden"}
    }, {
        "type":"Feature","geometry":{"type":"Polygon","coordinates":[[[-83.8929641,9.8594873],[-83.8930138,9.8594031],[-83.8929486,9.8593658],[-83.892899,9.85945],[-83.8929641,9.8594873]]]},"properties":{"osm_id":1316593261,"noname":"yes","garden:type":"residential","leisure":"garden"}
    }, {
        "type":"Feature","geometry":{"type":"Polygon","coordinates":[[[-83.8917415,9.8597442],[-83.8917496,9.8596821],[-83.8918207,9.8595969],[-83.8914827,9.8591972],[-83.8914522,9.8592125],[-83.8914423,9.8593425],[-83.8915346,9.8594761],[-83.8917059,9.8597202],[-83.8917415,9.8597442]]]},"properties":{"osm_id":1316593275,"noname":"yes","natural":"grassland"}
    },{
        "type":"Feature","geometry":{"type":"Polygon","coordinates":[[[-83.8916123,9.8592523],[-83.8916741,9.8591507],[-83.8916399,9.8591306],[-83.8915305,9.859066],[-83.8915252,9.8591281],[-83.8915466,9.8591836],[-83.8916123,9.8592523]]]},"properties":{"osm_id":1316593296,"noname":"yes","garden:type":"residential","leisure":"garden"}
    }]
}


var colorPostes = {
    radius: 4,
    fillColor: "#FFFF00",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};

var postes = {
    "type": "FeatureCollection",
    "name": "postes",
    "crs": {
        "type": "name",
        "properties": {
            "name": "urn:ogc:def:crs:OGC:1.3:CRS84"
        }
    },
    "features": [{"type":"Feature","geometry":{"type":"Point","coordinates":[-83.8930586,9.8591912]},"properties":{"osm_id":12186802618,"line_attachment":"suspension","man_made":"utility_pole","material":"concrete","utility":"electric;television;telecom"}},
    {"type":"Feature","geometry":{"type":"Point","coordinates":[-83.892786,9.8590331]},"properties":{"osm_id":12186802619,"line_attachment":"suspension","man_made":"utility_pole","material":"concrete","utility":"electric;television;telecom"}},
    {"type":"Feature","geometry":{"type":"Point","coordinates":[-83.8923597,9.858786]},"properties":{"osm_id":12186802620,"line_attachment":"suspension","man_made":"utility_pole","material":"concrete","utility":"electric;television;telecom"}},
    {"type":"Feature","geometry":{"type":"Point","coordinates":[-83.8917857,9.8584623]},"properties":{"osm_id":12186802621,"line_attachment":"suspension","man_made":"utility_pole","material":"concrete","utility":"electric;television;telecom"}},
    {"type":"Feature","geometry":{"type":"Point","coordinates":[-83.8915568,9.8583558]},"properties":{"osm_id":12186802622,"line_attachment":"suspension","man_made":"utility_pole","material":"concrete","utility":"electric;television;telecom"}},
    {"type":"Feature","geometry":{"type":"Point","coordinates":[-83.8914202,9.8587184]},"properties":{"osm_id":12186802623,"line_attachment":"suspension","man_made":"utility_pole","material":"concrete","utility":"electric;television;telecom"}},
    {"type":"Feature","geometry":{"type":"Point","coordinates":[-83.8918768,9.8589632]},"properties":{"osm_id":12186802624,"line_attachment":"suspension","man_made":"utility_pole","material":"concrete","utility":"electric;television;telecom"}},
    {"type":"Feature","geometry":{"type":"Point","coordinates":[-83.8922946,9.8592129]},"properties":{"osm_id":12186802625,"line_attachment":"suspension","man_made":"utility_pole","material":"concrete","utility":"electric;television;telecom"}},
    {"type":"Feature","geometry":{"type":"Point","coordinates":[-83.8927705,9.8594868]},"properties":{"osm_id":12186802626,"line_attachment":"suspension","man_made":"utility_pole","material":"concrete","utility":"electric;television;telecom"}},
    {"type":"Feature","geometry":{"type":"Point","coordinates":[-83.8930426,9.859546]},"properties":{"osm_id":12186802627,"line_attachment":"suspension","man_made":"utility_pole","material":"concrete","utility":"electric;television;telecom"}},
    {"type":"Feature","geometry":{"type":"Point","coordinates":[-83.8928731,9.8598723]},"properties":{"osm_id":12186802628,"line_attachment":"suspension","man_made":"utility_pole","material":"concrete","utility":"electric;television;telecom"}},
    {"type":"Feature","geometry":{"type":"Point","coordinates":[-83.8924294,9.8596515]},"properties":{"osm_id":12186802629,"line_attachment":"suspension","man_made":"utility_pole","material":"concrete","utility":"electric;television;telecom"}},
    {"type":"Feature","geometry":{"type":"Point","coordinates":[-83.8919357,9.8596394]},"properties":{"osm_id":12186802630,"line_attachment":"suspension","man_made":"utility_pole","material":"concrete","utility":"electric;television;telecom"}},
    {"type":"Feature","geometry":{"type":"Point","coordinates":[-83.8915791,9.8594519]},"properties":{"osm_id":12186802631,"line_attachment":"suspension","man_made":"utility_pole","material":"concrete","utility":"electric;television;telecom"}},
    {"type":"Feature","geometry":{"type":"Point","coordinates":[-83.8915306,9.8592326]},"properties":{"osm_id":12186802632,"line_attachment":"suspension","man_made":"utility_pole","material":"concrete","utility":"electric;television;telecom"}},
    {"type":"Feature","geometry":{"type":"Point","coordinates":[-83.8915089,9.8589311]},"properties":{"osm_id":12186802633,"line_attachment":"suspension","man_made":"utility_pole","material":"concrete","utility":"electric;television;telecom"}},
    {"type":"Feature","geometry":{"type":"Point","coordinates":[-83.8933119,9.8592495]},"properties":{"osm_id":12186802634,"line_attachment":"suspension","man_made":"utility_pole","material":"concrete","utility":"electric;television;telecom"}},
    {"type":"Feature","geometry":{"type":"Point","coordinates":[-83.8932987,9.8592586]},"properties":{"osm_id":12186802635,"line_attachment":"suspension","material":"concrete","design":"one-level","power":"pole"}},
    {"type":"Feature","geometry":{"type":"Point","coordinates":[-83.8930491,9.8595421]},"properties":{"osm_id":12186802636,"line_attachment":"suspension","material":"concrete","design":"one-level","power":"pole"}},
    {"type":"Feature","geometry":{"type":"Point","coordinates":[-83.8928828,9.8598731]},"properties":{"osm_id":12186802637,"line_attachment":"suspension","material":"concrete","design":"one-level","power":"pole"}}
    ]
}

var colorHidrantes = {
    radius: 4,
    fillColor: "#FF0000",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};

var hidrantes = {
    "type": "FeatureCollection",
    "name": "hidrantes",
    "crs": {
        "type": "name",
        "properties": {
            "name": "urn:ogc:def:crs:OGC:1.3:CRS84"
        }
    },
    "features": [
        {"type":"Feature","geometry":{"type":"Point","coordinates":[-83.8923122,9.8587599]},"properties":{"osm_id":12186802639,"colour":"Amarillo","couplings":"2","emergency":"fire_hydrant","fire_hydrant:type":"pillar"}},
        {"type":"Feature","geometry":{"type":"Point","coordinates":[-83.8921721,9.8591424]},"properties":{"osm_id":12186802638,"colour":"Amarillo","couplings":"2","emergency":"fire_hydrant","fire_hydrant:type":"pillar"}}
    ],

}


var styleCalles = {
    "color": "#5D6D7E",
    "weight": 6,
    "opacity": 0.65
};

var calles = {
    "type": "FeatureCollection",
    "name": "carreteras",
    "crs": {
        "type": "name",
        "properties": {
            "name": "urn:ogc:def:crs:OGC:1.3:CRS84"
        }
    },
    "features": [
        {"type":"Feature","geometry":{"type":"LineString","coordinates":[[-83.891419,9.8587392],[-83.891486,9.8587465],[-83.8915571,9.8588291],[-83.8926187,9.8594387],[-83.8930314,9.8596754]]},"properties":{"osm_id":113092447,"highway":"residential","surface":"asphalt","name":"Calle 2 Villa Laura"}},
        {"type":"Feature","geometry":{"type":"LineString","coordinates":[[-83.8915765,9.8583546],[-83.8918113,9.8584561],[-83.8933294,9.8593172]]},"properties":{"osm_id":1316593227,"highway":"residential","surface":"asphalt","name":"Calle 1 Villa Laura"}},
        {"type":"Feature","geometry":{"type":"LineString","coordinates":[[-83.8915571,9.8588291],[-83.8914889,9.8591232],[-83.8914894,9.8591574],[-83.891509,9.8591998],[-83.8917656,9.8594818],[-83.8918389,9.8595606],[-83.8918924,9.8596059],[-83.8919664,9.8596193],[-83.8924089,9.8596332],[-83.8924584,9.8596237],[-83.8924994,9.8595988],[-83.8926187,9.8594387]]},"properties":{"osm_id":172601497,"highway":"residential","surface":"asphalt","name":"Calle 3 Villa Laura"}},
        {"type":"Feature","geometry":{"type":"LineString","coordinates":[[-83.8955349,9.861532],[-83.8954793,9.8614766],[-83.8951367,9.8610492],[-83.8949001,9.860693],[-83.8948336,9.860574],[-83.8947652,9.8604273],[-83.8947492,9.8603818],[-83.8946287,9.8600388],[-83.8945224,9.8598512],[-83.894439,9.859756],[-83.8943505,9.8596771],[-83.8940064,9.8594969],[-83.8938256,9.8594058],[-83.893573,9.8592777],[-83.893495,9.8592573],[-83.8934107,9.8592698],[-83.8933294,9.8593172],[-83.8931747,9.859474],[-83.8930314,9.8596754],[-83.8928351,9.8600632],[-83.8927731,9.8602125],[-83.8927241,9.8602582],[-83.8926831,9.8602836],[-83.8926428,9.8603015],[-83.8923116,9.8604101],[-83.8922641,9.8604498],[-83.8922243,9.8605008],[-83.8921471,9.8606493],[-83.8916535,9.8622992],[-83.8916565,9.8623323],[-83.891674,9.8623673],[-83.8917139,9.8624161]]},"properties":{"osm_id":172601485,"highway":"residential","surface":"asphalt","name":"Calle 61"}}
    ]
}

//Funciones para visualizar el mapa 
//map.fitBounds(bounds);
L.geoJSON(casas).addTo(map);
L.geoJSON(lotes, {
    style: styleLotes
}).addTo(map);
L.geoJSON(hidrantes, {
    pointToLayer: function(feature, latlng) {
        return L.circleMarker(latlng, colorHidrantes);
    }
}).addTo(map);
L.geoJSON(ZonasVerdes, {
    style: styleZonasVerdes
}).addTo(map);
L.geoJSON(postes, {
    pointToLayer: function(feature, latlng) {
        return L.circleMarker(latlng, colorPostes);
    }
}).addTo(map)
L.geoJSON(calles, {
    style: styleCalles
}).addTo(map);
