let btn = document.querySelector('#button')
let ul = document.createElement('ul');
btn.addEventListener(
    'click',
    () => {
        let del = document.createElement('button');
        let done = document.createElement('button')
        let section = document.querySelector('#content');
        const inp = document.querySelector('.form');
       let div = document.createElement('div');
        let li = document.createElement('li');

        div.className = 'buttons'
        del.className = 'btn';
        del.type = 'button';

        done.className = 'btn';
        done.id = 'mark'
        done.type = 'button';
        done.innerHTML = `<span id= "done" class="material-symbols-outlined">
        done_all
        </span>`
        del.innerHTML = `<span id= "remove" class="material-symbols-outlined">
        delete
        </span>`

        section.append(ul)
        ul.append(li);
        li.append(inp.value, div)
        div.append(del, done)
        

       li.style.width = '100%'
        
        inp.value = ''

        done.addEventListener('click',
            () => {
                li.style.textDecoration = 'line-through';
                li.style.color = 'black';
                let completed = document.querySelector('#done');
                completed.style.color = 'green';
                done.style.backgroundColor = 'transparent';
                let mark = document.querySelector('#mark');
                mark.style.boxShadow = 'none'
            }
        )

        del.addEventListener('click',
            () => {
                li.style.display = 'none';

            }
            
        )
    }
)