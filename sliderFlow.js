$(document).ready(function(){

	if($('.contentSlider').size() > 0){

        $toBack = $('.toBack');
        $sliderFlow = $('.sliderFlow');
        $widthView = ($('.contentSlider').width());
        function getSize(){  return $('.sliderFlow li').size();   }
        $pos = 0;

        $sliderFlow.find('li').css('width',$widthView + ('px'));

        $(document).on('click','.sliderFlow li .action',function(){
        	//console.log($(this).closest('.contentSlider').attr('pos'));
        	$pos = parseInt($(this).closest('.contentSlider').attr('pos'));

            ms(this);
            $pos++;
        	$(this).closest('.contentSlider').attr('pos',$pos);
        });

        $toBack.on('click', function(){
            if ($pos == 1) {
                $(this).css('display','none');
            };
                
            $(this).parent().find('.sliderFlow').animate({left: parseInt($(this).parent().find('.sliderFlow').css('left'))+($widthView )+ 'px'}, 240, function(){
                $(this).parent().find('.sliderFlow').find('li:last-child').remove();
                $(this).parent().find('.sliderFlow').css('width', ($widthView * getSize()) + 'px');
                $pos = parseInt($(this).closest('.contentSlider').attr('pos'));
                $pos--;
				$(this).closest('.contentSlider').attr('pos',$pos);
            });

            

            return false;
        });

        function ms(elem){
            $id = $(elem).attr('target-id')
            $(elem).closest('.panel').find('.sliderFlow').append( $($id).clone().css('width',$widthView + ('px')) );
            $(elem).closest('ul').animate({left: -($widthView * ($pos + 1)) + "px"}, 420, function(){
                 $(elem).closest('.panel').find('.toBack').css('display','block');
            });
            $(elem).closest('.panel').find('.sliderFlow').css('width', ($widthView * getSize()) + 'px');
            
            //$pos = parseInt($(elem).closest('ul').attr('pos'));

        }
      }

})