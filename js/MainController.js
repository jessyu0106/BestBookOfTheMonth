app.controller('MainController', ['$scope', function($scope) { 
  $scope.title = 'Best Books of the Month'; 
  $scope.promo = 'The most popular books this month.';
  $scope.products = [
    { 
      name: 'A Little Life', 
      price: 16.95, 
      pubdate: new Date('2015', '03', '10'), 
      cover: 'https://images-na.ssl-images-amazon.com/images/I/51vp6VChi4L.jpg',
      likes: 0,
      dislikes: 0
    }, 
    { 
      name: 'The Girls', 
      price: 16.20, 
      pubdate: new Date('2016', '06', '14'), 
      cover: 'https://images-na.ssl-images-amazon.com/images/I/414VPUuEe6L.jpg',
      likes: 0,
      dislikes: 0
    }, 
    { 
      name: 'Harry Potter & The Prisoner of Azkaban', 
      price: 11.99, 
      pubdate: new Date('1999', '07', '08'), 
      cover: 'http://upload.wikimedia.org/wikipedia/en/b/b4/Harry_Potter_and_the_Prisoner_of_Azkaban_(US_cover).jpg',
      likes: 0,
      dislikes: 0 
    }, 
    { 
      name: 'Ready Player One', 
      price: 7.99, 
      pubdate: new Date('2011', '08', '16'), 
      cover: 'http://upload.wikimedia.org/wikipedia/en/a/a4/Ready_Player_One_cover.jpg',
      likes: 0,
      dislikes: 0 
    }
  ];
  $scope.plusOne = function(index) { 
    $scope.products[index].likes += 1; 
  };
  $scope.minusOne = function(index) { 
    $scope.products[index].dislikes += 1; 
  };
}]);

