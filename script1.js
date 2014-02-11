<script>   
   function getResults(){
	   process($('#url').val());   
   }
   
   
   $("#url").keyup(function(event){
    if(event.keyCode == 13){
        $("#process").click();
    }
});
 
   
   //call this function only to process raw data. separate all other analysis and filtering
   var originalParse = [];
   function process(results){
	   var res1 = "1 1 807 MICHAEL LEDUC Sr CONN COLLEGE 24:35.2 4:57   2 2 865 COLIN COTTON Jr WILLIAMS 24:42.1 4:59   3 3 780 COBY HOROWITZ Sr BOWDOIN 24:51.4 5:01   4 4 828 GREG KRATHWOHL Sr MIDDLEBURY 24:51.9 5:01   5 5 872 CHRIS LEE Sr WILLIAMS 24:57.4 5:02   6 6 768 TULLY HANNAN Sr BATES 25:01.0 5:02   7 7 831 NATE SANS Sr MIDDLEBURY 25:01.9 5:03   8 8 854 ANDREW SHAPERO Sr TUFTS 25:05.7 5:03   9 9 873 BIJAN MAZAHERI So WILLIAMS 25:07.1 5:04   10 10 789 DAVID CHELIMO Fr COLBY 25:09.3 5:04   11 11 833 WILDER SCHAAF Sr MIDDLEBURY 25:13.2 5:05   12 12 791 SILAS EASTMAN Fr COLBY 25:15.4 5:05   13 13 834 KEVIN WOOD Jr MIDDLEBURY 25:15.9 5:05   14 14 850 TIM NICHOLS Fr TUFTS 25:20.4 5:06   15 15 783 SAM SEEKINS Sr BOWDOIN 25:26.9 5:08   16 16 817 CHARLES PFANDER So HAMILTON 25:27.6 5:08   17 17 870 ALDIS INDE Jr WILLIAMS 25:28.9 5:08   18 18 871 MAX LABERGE Sr WILLIAMS 25:29.9 5:08   19 19 771 MIKE MARTIN Sr BATES 25:30.9 5:08   20 20 869 PETER HALE Fr WILLIAMS 25:33.4 5:09   21 21 790 CHARLIE COFFMAN Jr COLBY 25:34.4 5:09   22 22 866 PETER DREWS Sr WILLIAMS 25:34.6 5:09   23 23 795 JEFF HALE Jr COLBY 25:35.6 5:09   24 24 753 DAN CROWLEY So AMHERST 25:35.9 5:09   25 25 846 NICHOLAS GUARNACCIA So TUFTS 25:36.4 5:10   26 26 856 BEN WALLIS Sr TUFTS 25:37.0 5:10   27 27 829 SEBASTIAN MATT So MIDDLEBURY 25:39.1 5:10   28 28 822 BENJAMIN YEO Jr HAMILTON 25:39.9 5:10   29 29 782 NICK SABA Sr BOWDOIN 25:40.9 5:10   30 30 852 LUKE O'CONNOR Fr TUFTS 25:41.1 5:11   31 31 755 KC. FUSSELL Jr AMHERST 25:42.3 5:11   32 32 825 SAM CRAFT Sr MIDDLEBURY 25:43.6 5:11   33 33 776 JAMES BOEDING Sr BOWDOIN 25:45.0 5:11   34 34 779 KEVIN HOOSE Jr BOWDOIN 25:46.6 5:12   35 35 804 PATRICK DERMODY Jr CONN COLLEGE 25:47.6 5:12   36 867 DAVID FOLSOM Fr WILLIAMS 25:50.5 5:12   37 36 851 JAMIE NORTON Sr TUFTS 25:51.9 5:13   38 37 769 GREGG HELLER So BATES 25:54.6 5:13   39 875 COLE TOWNSEND Jr WILLIAMS 25:54.8 5:13   40 38 863 TAYLOR TITCOMB So WESLEYAN 25:55.2 5:13   41 39 760 CHARLIE REIGHARD Sr AMHERST 25:55.4 5:13   42 40 767 NOAH GRABOYS Sr BATES 26:00.9 5:14   43 41 759 ALVARO MORALES Sr AMHERST 26:00.9 5:14   44 42 845 LIAM CASSIDY Jr TUFTS 26:03.9 5:15   45 874 DANIEL SIEGEL Jr WILLIAMS 26:04.6 5:15   46 43 823 LUKE CARPINELLO So MIDDLEBURY 26:05.4 5:15   47 44 787 AVERY WENTWORTH Jr BOWDOIN 26:05.8 5:15   48 45 763 GREG TURISSINI Jr AMHERST 26:07.7 5:16   49 46 775 JOHN STANSEL Jr BATES 26:08.6 5:16   50 47 860 KEITH CONWAY So WESLEYAN 26:10.3 5:16   51 48 801 BEN BOSWORTH Fr CONN COLLEGE 26:12.9 5:17   52 49 766 JOE DOYLE Fr BATES 26:15.7 5:17   53 50 786 NICK WALKER So BOWDOIN 26:18.8 5:18   54 51 797 WILL MCCARTHY Jr COLBY 26:19.4 5:18   55 52 862 REID HAWKINS Fr WESLEYAN 26:21.8 5:19  56 853 MARSHALL PAGANO Jr TUFTS 26:23.0 5:19   57 781 WILL OSSOFF Jr BOWDOIN 26:23.2 5:19   58 824 SAMUEL CARTWRIGHT So MIDDLEBURY 26:23.2 5:19   59 53 793 GRIFFIN GAGNON Fr COLBY 26:25.7 5:19   60 54 758 RAYMOND MEIJER Fr AMHERST 26:27.7 5:20   61 55 764 CAMDEN BLACK-INGERSOL Jr BATES 26:27.9 5:20   62 772 BRYANT PERKINS So BATES 26:28.4 5:20   63 56 757 STEVEN LUCEY Fr AMHERST 26:31.4 5:21   64 57 800 BILLY BARNES Jr CONN COLLEGE 26:31.7 5:21   65 58 794 CHRIS GREENLEE Sr COLBY 26:38.4 5:22   66 788 CHASE BROWN So COLBY 26:39.7 5:22   67 864 ANDREW BEAUDOIN Jr WILLIAMS 26:40.5 5:22   68 792 ANDREW ESTRADA So COLBY 26:41.1 5:23   69 59 858 EVAN BIEDER Jr WESLEYAN 26:44.6 5:23   70 849 BRIAN MCLAUGHLIN Sr TUFTS 26:45.6 5:23   71 60 803 BRAD DEMARCO So CONN COLLEGE 26:46.8 5:24   72 826 AARON DETOLEDO So MIDDLEBURY 26:47.6 5:24   73 868 TODD FORD So WILLIAMS 26:48.6 5:24   74 61 819 WILLIAM ROBERTSON Sr HAMILTON 26:51.1 5:25   75 754 BEN FIEDLER Fr AMHERST 26:51.7 5:25   76 785 BRIDGER TOMLIN Fr BOWDOIN 26:52.5 5:25   77 855 JAMES TRAESTER So TUFTS 26:53.5 5:25   78 778 CALVIN HENRY So BOWDOIN 26:53.9 5:25   79 762 ROMEY SKLAR Jr AMHERST 26:54.3 5:25   80 847 BENJI HANSEN Sr TUFTS 26:54.8 5:25   81 798 CHRIS MILLMAN So COLBY 26:54.9 5:25   82 62 857 ERIC ARSENAULT Fr WESLEYAN 26:56.2 5:26   83 774 TAYLOR SAUCIER So BATES 26:56.8 5:26   84 827 SAMUEL KLOCKENKEMPER Fr MIDDLEBURY 26:59.2 5:26   85 63 816 JACK MOSES So HAMILTON 26:59.9 5:26   86 756 GUS GREENSTEIN Sr AMHERST 27:01.3 5:27   87 64 838 PATRICK HOAGLAND So TRINITY 27:02.2 5:27   88 848 GREG HARDY Jr TUFTS 27:03.1 5:27   89 784 JOHN IZZO Sr BOWDOIN 27:03.4 5:27   90 65 811 NIALL WILLIAMS So CONN COLLEGE 27:05.1 5:27   91 830 BRIAN RICH Fr MIDDLEBURY 27:05.9 5:28   92 761 JEFF SEELAUS So AMHERST 27:06.2 5:28   93 66 820 HARRISON SULLIVAN So HAMILTON 27:08.6 5:28   94 67 836 BRENDAN GAUTHIER Jr TRINITY 27:11.9 5:29   95 68 813 DANIEL BAER Jr HAMILTON 27:12.9 5:29   96 69 812 EVAN ABELSON So HAMILTON 27:13.7 5:29   97 70 809 ZANDER MINTZ Fr CONN COLLEGE 27:15.3 5:29   98 752 KEVIN CONNORS Fr AMHERST 27:16.7 5:30   99 832 DEREK SATTERFIELD Jr MIDDLEBURY 27:17.1 5:30   100 796 NATHAN MADEIRA Fr COLBY 27:17.4 5:30   101 71 859 PAUL BRAUCHLE Fr WESLEYAN 27:22.0 5:31   102 72 861 WILL DUDEK Fr WESLEYAN 27:22.8 5:31   103 777 SAMUEL DODGE Fr BOWDOIN 27:23.7 5:31   104 802 AARON DAVIS Sr CONN COLLEGE 27:27.7 5:32   105 73 835 SEAN DUNN Jr TRINITY 27:46.1 5:36   106 770 MICHAEL HOROWICZ Fr BATES 27:48.1 5:36   107 805 ALEJANDRO HERNANDEZ Fr CONN COLLEGE 27:49.4 5:36   108 821 GRANT WHITNEY Fr HAMILTON 28:06.9 5:40   109 74 844 CLAYTON RUSSELLR Sr TRINITY 28:13.4 5:41   110 808 ANDREW MAJKUT Sr CONN COLLEGE 28:22.8 5:43   111 810 RAYMOND RICH-FIONDELLA Fr CONN COLLEGE 28:25.2 5:44   112 75 840 NATHAN LOWRY Jr TRINITY 28:36.2 5:46   113 814 SCOTT ETKIN Sr HAMILTON 28:42.5 5:47   114 799 STEFAN SANDREUTER So COLBY 29:05.8 5:52   115 806 MICHAEL JOYCE Jr CONN COLLEGE 29:15.2 5:54   116 76 839 ALEXANDER KIM Fr TRINITY 30:14.7 6:06   117 77 842 CARMINE PIANTEDOSI Fr TRINITY 31:02.4 6:15 ";

        //one line of results starts with a (1st) place and ends with a time
		var line = /\d+\s*?#?.*?\d\d:\d\d/gm;
		//var line = /\d.*\n/g;
		//var lines = results.match(line)
		var lines = res1.match(line)
		//lines = results.split("\n");

		var parsedResults = [];

		//get place, name, team, and time from results
		for(i=0; i<lines.length; i++){
			entry = lines[i];
			

			var place = entry.match(/\s\d\d?\d?\s/);
			var runner = entry.match(/[a-zA-Z-'.]+\s[a-zA-Z-'.]+/);
			var time = entry.match(/\d\d:\d\d/);
			var schoolLine = entry.match(/[a-zA-Z-][a-zA-Z-][a-zA-Z-]+\s?[a-zA-Z-]+\s+\d/g).pop();
			var school = schoolLine.match(/[a-zA-Z-]+\s?[a-zA-Z-]+/);
			//var school = schoolLine.match(/[a-zA-Z-]+/);
			//var year = entry.match(/fr|so|jr|sr/);
			var year = entry.match(/\s\D\D\s/).toString().match(/\w\w/);

			parsedResults[i] = {'Place': place, 'Name': runner, 'Team': school, 'Time': time, 'Year'
			: year};
		}



		//add place on team
		teammates = [];
		for(k=0; k<parsedResults.length; k++){
			result = parsedResults[k];
			if (teammates[result.Team] == undefined){
				teammates[result.Team] = 0;
			}
			teammates[result.Team] ++;
			result.TPlace = teammates[result.Team];
		}

		originalParse = parsedResults;
		makeTable(parsedResults);
		score(parsedResults);
		//alert("score here");
		teamButtons();
   }
   
   	function score(results){
		scores = {};
		for(k=0; k<results.length; k++){
			if (results[k] != undefined){
				if(scores[results[k]['Team']] == undefined){
					scores[results[k]['Team']] = [];
				}
				//this lines needs to be redone...adding to array by seeing value at [array.length]
				if (results[k]['filtered place'] == undefined){
					scores[results[k]['Team']][scores[results[k]['Team']].length] = results[k]['Place'];
				}
				else{
					scores[results[k]['Team']][scores[results[k]['Team']].length] = results[k]['filtered place'];
				}
			}
		}
		//keys = Object.keys(scores);
		//for(i = 0; i<keys.length; i++){
			//alert(keys[i] + ": " + scores[keys[i]]);
		//}
		//alert(keys);
		makeTeamTable(scores);
		
	}
	
   
   function makeTeamTable(scores){
	   var table = "<table id='teamTable'>";
	   var teams = Object.keys(scores);
	   table += "<tr><th>Place</th><th>Team</th><th>1st</th><th>2nd</th><th>3rd</th><th>4th</th><th>5th</th><th>(6th)</th><th>(7th)</th><th>Total</th></tr>"
	   
	   var rows = {};
	   for(k=0; k<teams.length; k++){
			var team = teams[k];
			var sum = 0;
			row = "";
			//row += '<tr>';
			row += '<td>';
			row += team;
			row += '</td>';
			for (j=0; j<7; j++){
				if (scores[team][j] == undefined){
					row += ['<td>', ' ', '</td>'].join('');
				}
				else{
					if(j<5){
						row += ['<td>', scores[team][j], '</td>'].join('');
						sum += parseInt(scores[team][j]);
					}
					else{
						row += ['<td>(', scores[team][j], ')</td>'].join('');
					}
				}
			}
			if(scores[team][4] == undefined){
				sum = "incomplete"
			}
			row += ['<td>', sum, '</td>'].join('');
			
			//alert(scores[team]);
			
			//row += '</tr>'; 
			rows[team] = {'row': row, 'sum': sum};
			//table += row;
		}
		
		//sort the rows.. selection sort
		var x = 1;
		var teams1 = Object.keys(rows);
		for(h=0; h<teams1.length; h++){
			var teams = Object.keys(rows);
			minScore = 99999;
			bestTeam = '';
			for (t=0; t<teams.length; t++) {
				team = teams[t];
				teamScore = rows[team]['sum'];
				if(teamScore < minScore){
					minScore = teamScore;
					bestTeam = team;
				}
			}
			table += ["<tr><td>", x, "</td>"].join('');
			x ++;
			if(rows[bestTeam] == undefined){
				bestTeam = teams[0];
			}
			table += rows[bestTeam]['row'];
			table += "</tr>";
			delete rows[bestTeam];
		}
		table += "</table>";
		var span = document.getElementById('teamResults');
		span.innerHTML = table;
   }
   
   function makeTable(parsed){
	   //make table
	   parsedResults = parsed;
		var table = "<table id='customers'>";
		table += "<tr>";
		
		//print headings (the first elements may be undefined)
		z = 0;
		while(parsedResults[z] == undefined && z < parsedResults.length){
			z++;
		}
		if(z < parsedResults.length){
			keys = Object.keys(parsedResults[z]);
		}
		for (j=0; j<keys.length; j++){
			table += ['<th>', keys[j], '</th>'].join('');
		}
		
		
		//alert(parsedResults[0]);
		//print results
		table += "</tr>";
		for(k=0; k<parsedResults.length; k++){
			if (parsedResults[k] != undefined){
				var result = parsedResults[k];
				
				table += '<tr>'; 
				for (j=0; j<keys.length; j++){
					table += ['<td>', result[keys[j]], '</td>'].join('');
				}
				table += '</tr>'; 
			}
		}
		table += "</table>";
	
		
		var span = document.getElementById('resultTable');
		span.innerHTML = table;
	}
	
	function teamButtons(){
		  //add team buttons
		//  buttons += '<input onChange="refresh()" type="button"';
		var buttons = "Teams: <br></br>";
		for(k=0; k<originalParse.length; k++){
			if(buttons.indexOf(originalParse[k]["Team"]) == -1){
				buttons += originalParse[k]["Team"];
				buttons += '<input onChange="refresh()" data-id = "fr" type="checkbox"  checked="checked" id="';
				buttons += originalParse[k]["Team"];
				buttons += '" >';  
			}
		}
		buttons += " <br></br>";
		var span = document.getElementById('teams');
		span.innerHTML = buttons;
	}
   
	
	

	function refresh(){
		var hide = ""; 
			var x = 0;
			var i = 0;
			$('input').each(function(){
			   if(!$(this).is(':checked')){
				  hide += " ";
				  hide += $(this).attr("id");
			   }  
			});
			 
			var filtered = originalParse.slice(0);
			//alert(hide);
			for(k=0; k<filtered.length; k++){
				if(hide.indexOf(filtered[k]['Year']) > -1 || hide.indexOf(filtered[k]['Team']) > -1){
					delete filtered[k];
				}		
			}
	
			//add filtered placeholder
			var t = 1;
			for(k=0; k<filtered.length; k++){
				if (filtered[k] != undefined){
					filtered[k]['filtered place'] = t;
					t ++;
				}
			}
	
			makeTable(filtered);  
			//alert("score refresh");
			score(filtered);
	}
   
</script>
