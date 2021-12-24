const i_am_designer = document.getElementById('i-am-designer');
const i_am_developer = document.getElementById('i-am-developer');
const i_am_diagrammer = document.getElementById('i-am-diagrammer');

i_am_designer.addEventListener('click', () => {
    toggle_designer_modal();
});
i_am_developer.addEventListener('click', () => {
    alert('I am a developer');
});
i_am_diagrammer.addEventListener('click', () => {
    alert('I am a diagrammer');
});


const top_container_default = `<div>
<h1>Meet Tridib Roy Arjo</h1>
<h4>UI Designer, C# Developer</h4>
<ul>
    <li><i id="i-am-designer" class="fas fa-layer-group"></i></li>
    <li><i id="i-am-developer" class="fas fa-code"></i></li>
    <li><i id="i-am-diagrammer" class="fas fa-project-diagram"></i></li>
</ul>
</div>`;


var isEnableDesignerModal = false;
var e = null;
function toggle_designer_modal(){
    if (!isEnableDesignerModal) {
        e = document.getElementById('top-container').firstElementChild;
    replace(e, parse(`<div class="modal">
    <div class="modal-content">
    <i id="i-am-designer" class="fas fa-layer-group"></i>
        <h2>I am a designer</h2>
        <p>I am a UI Designer, I love to design beautiful and functional user interface. I am a passionate learner and I am always looking for new ways to improve myself.</p>
    </div>
</div>`));
        isEnableDesignerModal = true;
    }
    else{
        e = document.getElementById('top-container').firstElementChild;
    replace(e, parse(top_container_default));
        isEnableDesignerModal = false;
    }
    
}

function parse(html){
    var e = document.createElement('div');
    e.innerHTML = html;
    return e.childNodes[0];
}

function replace(e1, e2){
    e1.parentNode.replaceChild(e2, e1);
}