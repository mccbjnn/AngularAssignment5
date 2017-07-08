describe('menuItem', function () {

  var menuService;
  var $httpBackend;
  var ApiPath;

  beforeEach(function () {
    module("public");


    inject(function ($injector) {
      menuService = $injector.get('MenuService');
      $httpBackend = $injector.get('$httpBackend');
      ApiPath = $injector.get('ApiPath');
    });
  });

 

  it('should return a valid menu item', function() {
    var itemCode = short_name;
    short_name=A1;

    $httpBackend.whenGET(ApiPath + '/menu_items/' + itemCode + '.json').respond
      (['id: 1, short_name: 'A1', name: 'Won Ton  Soup', description: 'chicken broth with won ton']);
  
    menuService.getMenuItem(itemCode).then(function(response) {
      expect(response.data).toEqual
       ([ id: 1, short_name: 'A1', name: 'Won Ton  Soup', description: 'chicken broth with won ton')];
      
    });

    $httpBackend.flush();
  });

});
