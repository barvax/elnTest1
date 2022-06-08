

var folders = [
    {
        folderName: 'folder-1',
        image: 'fa-book',
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
        folderName: 'folder-2',
        image: 'fa-book-skull',
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

function CreateFolders(index) {
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
            CreateSubFolders(folders[i].subFolder.length)
        }
        var h6 = document.createElement('h6');
        h6.innerHTML = folders[i].folderName;
        div.append(h6);

    }


}

function CreateSubFolders(index){
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

CreateFolders(folders.length);

function Home(){
    location.reload();
}
