var portfolioApp = angular.module('portfolioApp',[]); 


portfolioApp.controller('GalleryListCtrl', function($scope) {
$scope.tytul ="Galeria";
$scope.ilosc = 2*3;
$scope.query="";
$scope.galleries = [
{ 'title':'Szaci 1',
 'when':'2014-08-04',
 'thumbnailUrl':'image/lab6/szaci1.JPG'
},
{ 'title':'Szaci 2',
 'when':'2015-06-04',
 'thumbnailUrl':'image/lab6/szaci2.JPG'
},
{ 'title':'Szaci 3',
 'when':'2017-01-04',
 'thumbnailUrl':'image/lab6/szaci3.JPG'
},
    
{ 'title':'Kot',
 'when':'2018-03-04',
 'thumbnailUrl':'image/lab6/6uh8n.jpg'
},
{ 'title':'Dog',
 'when':'2017-08-06',
 'thumbnailUrl':'image/lab6/dog.JPG'
},
{ 'title':'Cos',
 'when':'2014-08-04',
 'thumbnailUrl':'image/lab6/iso-republic-colorful-graffiti-art.jpg'
} 
];
$scope.sortList = [
    {
    'label':'Alfabetycznie',
    'value':'title'
    },
    {
    'label':'Chronologicznie',
    'value':'when'
    },
        {
    'label':'Odwrotnie niż Chronologicznie',
    'value':'-when'
    }
    
]; 
$scope.orderProp = 'when';
}); 
