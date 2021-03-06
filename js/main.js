window.onload = function(){
	var map = new BMap.Map("mapwindow");    // 创建Map实例
	map.centerAndZoom(new BMap.Point(120.898576,31.984992), 13);  // 初始化地图,设置中心点坐标和地图级别
	map.addControl(new BMap.MapTypeControl());   //添加地图类型控件
	map.setCurrentCity("南通");          // 设置地图显示的城市 此项是必须设置的
	map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
	map.addControl( new BMap.NavigationControl({anchor: BMAP_ANCHOR_TOP_LEFT}));    //添加缩放条    


//环形菜单
	var toggle = $('#ss_toggle');
	var menu = $('#ss_menu');
	var rot;
	$('#ss_toggle').on('click', function (ev) {
		rot = parseInt($(this).data('rot')) - 180;
		menu.css('transform', 'rotate(' + rot + 'deg)');
		menu.css('webkitTransform', 'rotate(' + rot + 'deg)');
		if (rot / 180 % 2 == 0) {
			toggle.parent().addClass('ss_active');
			toggle.addClass('close');
		} else {
			toggle.parent().removeClass('ss_active');
			toggle.removeClass('close');
		}
		$(this).data('rot', rot);
	});
	menu.on('transitionend webkitTransitionEnd oTransitionEnd', function () {
		if (rot / 180 % 2 == 0) {
			$('#ss_menu div i').addClass('ss_animate');
		} else {
			$('#ss_menu div i').removeClass('ss_animate');
		}
	});

//alarm 框
	var alarm_box = $(".alarm");
	var alarm_close = alarm_box.find('b');
	var show_alarm = function(){
		alarm_box.show(400);
	}
	var hide_alarm = function(){
		alarm_box.hide(400);
	}

	alarm_close.click(function(event) {
		hide_alarm();
	});

//clear
	var clear_overlay = $(".clear");
	clear_overlay.click(function(event) {
		map.clearOverlays();
		map.centerAndZoom(new BMap.Point(120.898576,31.984992), 13);
	});

//注记marker
 var icon_url = "http://webmap2.map.bdstatic.com/wolfman/static/common/images/spotmkrs_ad2672a.png";
 var bike_icon_url = "http://webmap1.map.bdstatic.com/wolfman/static/common/images/ui3/mo_banner_ba37b5d.png";
 var icon_sub = new BMap.Icon(icon_url, new BMap.Size(22,22), {"imageOffset":new BMap.Size(-35,-25)});
 var icon_exc = new BMap.Icon(icon_url, new BMap.Size(26,28), {"imageOffset":new BMap.Size(-138,-25)});
 var icon_bike = new BMap.Icon(bike_icon_url, new BMap.Size(25,25), {"imageOffset":new BMap.Size(-105,-215)});
 var icon_trail = new BMap.Icon(icon_url, new BMap.Size(22,22), {"imageOffset":new BMap.Size(-252,-202)});
   //1号线站点
    var line1 = $("#ss_menu").find('div:nth-child(1)').find('h1');
		line1.click(function(event) {
		//覆盖点
		//map.clearOverlays();
		var point = [],marker = [],label=[];
			 for (var i = 0; i < 31; i++) {
			 	point.push(new BMap.Point(line1_point[i].lon,line1_point[i].lat));
			 	if(i == 5||i == 9||i==12||i==18||i==24||i==29){
			 		marker.push(new BMap.Marker(point[i],{icon:icon_exc}));  // 创建标注
			 	}else{
			 		marker.push(new BMap.Marker(point[i],{icon:icon_sub}));
			 	}
			 		
			 	map.addOverlay(marker[i]);               // 将标注添加到地图中
			 	label[i] = new BMap.Label(line1_point[i].name,{"offset":new BMap.Size(10,-20)});//站名主注记
	            marker[i].setLabel(label[i]);
	            //map.centerAndZoom(new BMap.Point(120.898576,31.984992), 13);
			 };
			  	var polyline = new BMap.Polyline(point, {strokeColor:"#f00", strokeWeight:6, strokeOpacity:0.5});  //定义折线
				map.addOverlay(polyline);     //添加折线到地图上  
	});

	//2号线站点
	var line2 = $("#ss_menu").find('div:nth-child(2)').find('h1');
		line2.click(function(event) {
			//覆盖点
		// map.clearOverlays();
		var point = [],marker = [],label=[];
		for (var i = 0; i < 24; i++) {
		 	point.push(new BMap.Point(line2_point[i].lon,line2_point[i].lat));
		 	if(i == 3||i == 5||i == 8||i == 11||i == 17||i == 21){
			 		marker.push(new BMap.Marker(point[i],{icon:icon_exc}));  // 创建标注
			 	}else{
			 		marker.push(new BMap.Marker(point[i],{icon:icon_sub}));
			 	}

		 	map.addOverlay(marker[i]);               // 将标注添加到地图中
		 	label[i] = new BMap.Label(line2_point[i].name,{"offset":new BMap.Size(10,-20)});//站名主注记
	        marker[i].setLabel(label[i]);
	       // map.centerAndZoom(new BMap.Point(120.898576,31.984992), 13);
		 };
		  var polyline = new BMap.Polyline(point, {strokeColor:"#00f", strokeWeight:6, strokeOpacity:0.5});  //定义折线
		  map.addOverlay(polyline);     //添加折线到地图上
	});

	//3号线站点
	var line3 = $("#ss_menu").find('div:nth-child(3)').find('h1');
		line3.click(function(event) {
		//覆盖点
			var point = [],marker = [],label=[];
			for (var i = 0; i < 22; i++) {
			 	point.push(new BMap.Point(line3_point[i].pos.split(",")[0],line3_point[i].pos.split(",")[1]));
			 	if(i == 2||i == 4||i==11||i==13||i==18||i==21){
				 		marker.push(new BMap.Marker(point[i],{icon:icon_exc}));  // 创建标注
				 	}else{
				 		marker.push(new BMap.Marker(point[i],{icon:icon_sub}));
				 	}
			 	map.addOverlay(marker[i]);               // 将标注添加到地图中
			 	label[i] = new BMap.Label(line3_point[i].name,{"offset":new BMap.Size(10,-20)});//站名主注记
		        marker[i].setLabel(label[i]);
		        //map.centerAndZoom(new BMap.Point(120.898576,31.984992), 13);
			 };
			   var polyline = new BMap.Polyline(point, {strokeColor:"#802a2a", strokeWeight:6, strokeOpacity:0.5});  //定义折线
			   map.addOverlay(polyline);     //添加折线到地图上
		});

	//4号线站点
	var line4 = $("#ss_menu").find('div:nth-child(4)').find('h1');
		line4.click(function(event) {
		//覆盖点
			var point = [],marker = [],label=[];
			for (var i = 0; i < 16; i++) {
			 	point.push(new BMap.Point(line4_point[i].pos.split(",")[0],line4_point[i].pos.split(",")[1]));
			 	if(i == 1||i == 5||i == 9||i==13){
				 		marker.push(new BMap.Marker(point[i],{icon:icon_exc}));  // 创建标注
				 	}else{
				 		marker.push(new BMap.Marker(point[i],{icon:icon_sub}));
				 	}
			 	map.addOverlay(marker[i]);               // 将标注添加到地图中
			 	label[i] = new BMap.Label(line4_point[i].name,{"offset":new BMap.Size(10,-20)});//站名主注记
		        marker[i].setLabel(label[i]);
		        //map.centerAndZoom(new BMap.Point(120.898576,31.984992), 13);
			 };
			   var polyline = new BMap.Polyline(point, {strokeColor:"#0f0", strokeWeight:6, strokeOpacity:0.5});  //定义折线
			   map.addOverlay(polyline);     //添加折线到地图上
		});

//铁路
	var trailway = $(".trail");
	trailway.click(function(event) {
		var point = [],marker = [],label=[];
			for (var i = 0; i < 14; i++) {
			 	point.push(new BMap.Point(trail_point[i].pos.split(",")[0],trail_point[i].pos.split(",")[1]));
				marker.push(new BMap.Marker(point[i],{icon:icon_trail}));
			 	map.addOverlay(marker[i]);               // 将标注添加到地图中
			 	label[i] = new BMap.Label(trail_point[i].name,{"offset":new BMap.Size(10,-20)});//站名主注记
		        marker[i].setLabel(label[i]);
		        //map.centerAndZoom(new BMap.Point(120.898576,31.984992), 13);
			 };
			   var polyline = new BMap.Polyline(point, {strokeColor:"#000", strokeWeight:6, strokeOpacity:0.5});  //定义折线
			   map.addOverlay(polyline);     //添加折线到地图上
	});



//左侧拉出栏
	var side_bar = $('.side_bar')
	var sidebarSwitch = $('.side_bar').find('span');
	var switchflag = false;
	sidebarSwitch.click(function(event) {
		if(!switchflag){
			var st = setInterval(function(){
					this.le = side_bar.css('left').split('px')[0];
					side_bar.css('left',parseInt(this.le)+10+'px');
			 		if(this.le>=-10){
			 			clearInterval(st);
			 		}
				},10);
			sidebarSwitch.html('收回侧边栏');
			switchflag = true;
		}
		else{
			var st = setInterval(function(){
					this.le = side_bar.css('left').split('px')[0];
					// console.log(this.le);
					side_bar.css('left',parseInt(this.le)-10+'px');
			 		if(this.le<=-300){
			 			clearInterval(st);
			 		}
				},10);
			sidebarSwitch.html('拉出侧边栏');
			switchflag = false;
		}
		
	});
	

		//自行车
	var bike_search = $('#search > i');
	var side_list = $('#side_bar > ul > li:nth-child(2) > div >ul');
	bike_search.click(function(event) {
		 //map.clearOverlays();
		 side_list.empty();
		 var keyword = $('#search > input').val();//输入的关键字
		     var point = [],marker = [],label=[];
		if(!keyword){
				for (var i = 0; i < bike_point.length; i++) {
							point.push(new BMap.Point(bike_point[i].pos.split(",")[0],bike_point[i].pos.split(",")[1]));
						 	marker.push(new BMap.Marker(point[i],{icon:icon_bike}));  // 创建标注
						 	map.addOverlay(marker[i]);               // 将标注添加到地图中
						 	label[i] = new BMap.Label(bike_point[i].name,{"offset":new BMap.Size(-10,-20)});//站名主注记
					        marker[i].setLabel(label[i]);//点的名称
							side_list.append('<li class="'+bike_point[i].num+'"><h5>'+bike_point[i].name+'</h5><span>车辆总数：'+bike_point[i].sum+'</span><p>'+bike_point[i].add+'</p></li>');
						 	side_list.find('li.'+i).click(function(event) {
								var p = parseInt($(this).attr('class'));
						 		map.centerAndZoom(new BMap.Point(bike_point[p].pos.split(",")[0],bike_point[p].pos.split(",")[1]),17); 
							});	
				 };
		}
		else{
				for (var i = 0; i < bike_point.length; i++) {
						 if(bike_point[i].name.indexOf(keyword)>=0){
						 	point.push(new BMap.Point(bike_point[i].pos.split(",")[0],bike_point[i].pos.split(",")[1]));
						  	label.push(new BMap.Label(bike_point[i].name,{"offset":new BMap.Size(-10,-20)}));//站名主注记
						 	side_list.append('<li class="'+bike_point[i].num+'"><h5>'+bike_point[i].name+'</h5><span>车辆总数：'+bike_point[i].sum+'</span><p>'+bike_point[i].add+'</p></li>');
						  	side_list.find('li.'+i).click(function(event) {
						 		var p = parseInt($(this).attr('class'));
						 		map.centerAndZoom(new BMap.Point(bike_point[p].pos.split(",")[0],bike_point[p].pos.split(",")[1]),17); 
						 	});
						 } 	
				 };
				 for(var j in point){
						marker.push(new BMap.Marker(point[j],{icon:icon_bike}));  // 创建标注  	
				 }
				 for(var k in marker){
				 		marker[k].setLabel(label[k]);//点的名称
						map.addOverlay(marker[k]);  // 将标注添加到地图中
				 }
			}

	});


		
}

