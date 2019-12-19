/*
  .....................................
  . . . . . . . . . . . . . . . . . . .
  .  .  .  .  .  .  .  .  .  .  .  .  .
  .  .  Appear
  .  .  .  .  .  .  .  .  .  .  .  .  .
  . . . . . . . . . . . . . . . . . . .
  .....................................
*/
var Appear = 
{
  items: []
};

/*
  .....................................
  . . . . . . . . . . . . . . . . . . .
  .  .  .  .  .  .  .  .  .  .  .  .  .
  .  .  Appear - Init
  .  .  .  .  .  .  .  .  .  .  .  .  .
  . . . . . . . . . . . . . . . . . . .
  .....................................
*/
Appear.init = function()
{
  document.querySelectorAll('[data-appear]').forEach(function(node)
  {
    Appear.items.push(
    {
      node: node
    ,
      appear: false
    ,
      name: node.getAttribute('data-appear-name')
    ,
      once: node.getAttribute('data-appear-once') !== null
    });
  });
}

/*
  .....................................
  . . . . . . . . . . . . . . . . . . .
  .  .  .  .  .  .  .  .  .  .  .  .  .
  .  .  Appear - Update
  .  .  .  .  .  .  .  .  .  .  .  .  .
  . . . . . . . . . . . . . . . . . . .
  .....................................
*/
Appear.update = function()
{
  /*
    Frame Dimensions
  */
  const frame =
  {
    width: window.innerWidth
  ,
    height: window.innerHeight
  };
  
  /*
    Items
  */
  Appear.items && Appear.items.forEach(item => 
  {
    const bounding = item.node.getBoundingClientRect();
    
    if((bounding.x + bounding.width > 0 && bounding.x < frame.width)
    && (bounding.y + bounding.height > 0 && bounding.y < frame.height))
    {
      ! (item.once && item.appear) && item.node.classList.add('appear');
    }
    else
    {
      ! item.once && item.node.classList.remove('appear');
    }
  });
}
