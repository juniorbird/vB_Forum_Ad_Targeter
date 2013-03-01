// Pages & their categories
var pcts =   [];

pcts =	[
		['3','st'],
		['4','pregnancy'],
		['6','parenting'],
		['14','st'],
		['15','st'],
		['141','baby'],
		['151','st'],
		['152','st'],
		['165','st'],
		['171','st'],
		['179','st'],
		['180','st'],
		['245','st'],
		['249','st']
		];



	var fip = '$foruminfo[parentlist]';
	var fipa = new Array();
	fipa = fip.split(',');
	var z = fipa.length;

	
	var tt='nt'; //set a default


	while (z--)	{
		for (y=0; y< pcts.length; y++)	{
			if (pcts[y][0] == fipa[z])	{
				var tt=pcts[y][1];
			}
		
		}
	}


