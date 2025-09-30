
const dropSnips = document.querySelectorAll('.drop-snip')

addEventListener('click', handleToggle)

function handleToggle(e){

    if(e.type == 'click'){
        const target = e.target.closest('.drop-down')
        console.log(target)
        // const dropSnips
    }

}