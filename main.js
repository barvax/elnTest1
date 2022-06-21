
var timeLineTempID= null;
var folderSubToggle = false;
var folders = [
    {
        folderName: 'folder-1',
        image: 'fa-book',
        subFolder:[
            {
                folderName: 'sub folder-1',
                 image: 'fa-book',
				 page: 'timeline.html'
				
            },
            {
                folderName: 'sub folder-2',
                 image: 'fa-book',
				  page:'timeline.html'
            },
        ]
    },
    {
        folderName: 'folder-2',
        image: 'fa-book-skull',
        subFolder:[
            {
                folderName: 'sub folder-1',
                 image: 'fa-book',
				  page:'timeline.html'
            },
            {
                folderName: 'sub folder-2',
                 image: 'fa-book',
				  page:'timeline.html'
            },
        ]
    },
    {
        folderName: 'folder-3',
        image: 'fa-user-group',
        subFolder:[
            {
                folderName: 'sub folder-1',
                 image: 'fa-book',
            },
            {
                folderName: 'sub folder-2',
                 image: 'fa-book',
            },
        ]
    },
    {
        folderName: 'folder-4',
        image: 'fa-calculator',
        subFolder:[
            {
                folderName: 'sub folder-1',
                 image: 'fa-book',
            },
            {
                folderName: 'sub folder-2',
                 image: 'fa-book',
            },
        ]
    },
    {
        folderName: 'folder-5',
        image: 'fa-square-poll-vertical',
        subFolder:[
            {
                folderName: 'sub folder-1',
                 image: 'fa-book',
            },
            {
                folderName: 'sub folder-2',
                 image: 'fa-book',
            },
        ]
    },
    {
        folderName: 'folder-6',
        image: 'fa-flask-vial'
        , subFolder:[
            {
                folderName: 'sub folder-1',
                 image: 'fa-book',
            },
            {
                folderName: 'sub folder-2',
                 image: 'fa-book',
            },
        ]
    },
    {
        folderName: 'folder-7',
        image: 'fa-registered',
        subFolder:[
            {
                folderName: 'sub folder-1',
                 image: 'fa-book',
            },
            {
                folderName: 'sub folder-2',
                 image: 'fa-book',
            },
        ]
    
    },
    {
        folderName: 'folder-8',
        image: 'fa-campground',
        subFolder:[
            {
                folderName: 'sub folder-1',
                 image: 'fa-book',
            },
            {
                folderName: 'sub folder-2',
                 image: 'fa-book',
            },
        ]
    },   {
        folderName: 'folder-9',
        image: 'fa-file-lines',
        subFolder:[
            {
                folderName: 'sub folder-1',
                 image: 'fa-book',
            },
            {
                folderName: 'sub folder-2',
                 image: 'fa-book',
            },
        ]
    }
 
]
function EnterSubFolder(index) {
   
    var x = document.getElementById('folder-name');
    x.style.visibility = "visible";
    x.innerHTML = folders[index].folderName;
    x.classList.remove('xx-x');
    var z = document.createElement('i');
    x.append(z);
    z.classList.add('fa-solid')
    z.classList.add('fa-arrow-up-short-wide')
    z.style.paddingLeft="20px";
    z.onclick = function(){
        DeleteFolders();
        CreateFolders(folders.length);
        x.style.visibility = "hidden";
        z.remove();
    }

}

function CreateFolders(index , pos) {
    const root = document.getElementById('xx');
    for (let i = 0; i < index; i++) {
        var div = document.createElement('div');
        root.append(div);
        div.className='folder';
        var image = document.createElement('i');
        image.classList.add('fa-solid')
        image.classList.add(folders[i].image);
        div.append(image);
        image.onclick = function (){
            EnterSubFolder(i)
            DeleteFolders()
            CreateSubFolders(folders[i].subFolder.length , i )
			
        }
        var h6 = document.createElement('h6');
        h6.innerHTML = folders[i].folderName;
        div.append(h6);

    }


}

function CreateSubFolders(index ,pos){
    const root = document.getElementById('xx');

    for (let i = 0; i < index; i++) {
        var div = document.createElement('div');
        root.append(div);
        div.className='folder';
        var image = document.createElement('i');
        image.classList.add('fa-solid');
        image.classList.add(folders[index].subFolder[i].image);
        div.append(image);
       
        image.onclick = function (){
           var section = document.getElementById('middle-middle-div');
           section.style.display='none';
		   
		console.log(folders[pos].subFolder[i].page)
          window.location.href = folders[pos].subFolder[i].page;
           
        }
        var h6 = document.createElement('h6');
     
        h6.innerHTML = folders[index].subFolder[i] .folderName;
        div.append(h6);
       
       
        
      
     
            
    
           
    
       

    }

}

function DeleteFolders(){
    var del = document.querySelectorAll('.folder');
    for (let i = 0; i < del.length; i++) {
        del[i].remove();
        
    }
}
if(document.getElementById('xx')!=null){
	CreateFolders(folders.length);
}


function Home(){
    window.location.href = "index.html";
}
function GoToMain(){
	 window.location.href = "main.html";
}
function ChangeYear(){
	
	var x = document.getElementById(timeLineTempID);
	if(x!=null){
		var z = (x.getAttribute('data-year'));
		console.log(z);
		
		
		var input =document.getElementById('yearInput'); 
		x.setAttribute('data-year', input.value)
		console.log(input.value);
		
			var input =document.getElementById('dataInput'); 
		x.setAttribute('data-text', input.value)
		var div = document.getElementById('input-div-timeline');
	div.style.display = 'none'
		
	}
	
}
if(document.getElementById("year1")!=null){
	
	document.getElementById("year1").addEventListener("click",function(){asdf('year1')} );
	document.getElementById("year2").addEventListener("click",function(){asdf('year2')} );
		document.getElementById("year3").addEventListener("click",function(){asdf('year3')} );
			document.getElementById("year4").addEventListener("click",function(){asdf('year4')} );
				document.getElementById("year5").addEventListener("click",function(){asdf('year5')} );
}

function asdf (temp){
	var x = document.getElementById('input-div-timeline');
	x.style.display = 'block';
	timeLineTempID = temp;
}

function ShoeMeSub(){
		var box =document.getElementById('xx'); 
	DeleteFolders();
		var projectFolders = document.getElementById('project-folders'); 
	if(!folderSubToggle){
		CreateSubProject(5 );
		folderSubToggle = true;
		var name = document.getElementById('folder-name'); 
		 
		name.style.visibility="hidden";
		projectFolders.innerHTML = "Sub Projects"
	}else{
		   CreateFolders(folders.length);
		   folderSubToggle = false;
		   	projectFolders.innerHTML = "Project Folders"
	}
	
}

function CreateSubProject(index ){
    const root = document.getElementById('xx');

    for (let i = 0; i < index; i++) {
        var div = document.createElement('div');
        root.append(div);
        div.className='folder';
        var image = document.createElement('i');
        image.classList.add('fa-solid');
       // image.classList.add(folders[index].subFolder[i].image);
        //div.append(image);
       
      /*  image.onclick = function (){
           var section = document.getElementById('middle-middle-div');
           section.style.display='none';
		   
		console.log(folders[pos].subFolder[i].page)
          window.location.href = folders[pos].subFolder[i].page;
           
        }*/
        var h6 = document.createElement('h6');
     
        h6.innerHTML = "Sub Project " +(i+1);
        div.append(h6);
       
       
        
      
     
            
    
           
    
       

    }

}
