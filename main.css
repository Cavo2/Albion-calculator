// Useful functions

Object.prototype.setAttributes = function () {
	let arg = [ ...arguments ];
	for( let i = 0; i < arg.length; i+=2 ) {
			this.setAttribute( arg[i], arg[ i+1 ] );
	}
}

let sum = document.getElementsByClassName( 'sum' )[0];
let sub = document.getElementsByClassName( 'sub' )[0];

function newButtonDiv( e ) {
    for( let i = 0; i < e.length; i++ ) {
        let div = document.createElement( 'div' );
        div.setAttribute( 'class', 'newButtonDiv' )
        e[i].appendChild( div )

        let input = document.createElement( 'input' );
        input.setAttributes( 'class', 'newButton', 'value', 'ADD', 'type', 'button' )
        div.appendChild( input );
    }
}

newButtonDiv( [ sum, sub ] )

let firstAddButton = document.getElementsByClassName( 'newButton' )[0];
let lastAddButton = document.getElementsByClassName( 'newButton' )[1];


function newElement( e, parentToLink ) {
    e.addEventListener( 'click', function () {
        let div = document.createElement( 'div' );
        div.setAttribute( 'class', 'newElement' )
        div.innerHTML =
        `
        <div>
            <p> Price </p>
            <input type="text"></input>
        </div>
        <div> 
            <p> Amount </p>
            <input type="text"></input>
        </div>
        `;
        parentToLink.prepend( div );

        removeButton( e )
    })
}

newElement( firstAddButton, sum )
newElement( lastAddButton, sub )


function removeButton ( e ) {
    if( e.parentNode.children.length === 2 ) {
        return;
    }
    let input = document.createElement( 'input' );
    input.setAttributes( 'class', 'removeButton', 'value', 'REMOVE', 'type', 'button' )
    e.parentNode.appendChild( input )

    input.addEventListener( 'click', function () {
        let mainDiv = e.parentNode.parentNode;
        mainDiv.children[ mainDiv.children.length - 2 ].remove();

        if( mainDiv.children.length === 1 ) {
            input.remove()
        }
    })
}


let calc = document.getElementsByClassName( 'calc' )[ 0 ];

calc.addEventListener( 'click', function() {
    let arry = [ add = 0, subtract = 0 ];
    let sumChilds = sum.children;
    let subChilds = sub.children;

    function addSubAmount( element, n ) {
        for( let i = 0; i < element.length - 1; i++ ) {
            let arr = [];
            Object.values( element[i].children ).forEach( e => {
                let value = e.children[1].value;
                value === "" ? arr.push( 1 ) : arr.push( parseFloat(value) );
            })
            if( arr[0] !== 1 || arr[1] !== 1 ){
                arry[n] += arr[0] * arr[1];
            }
        }
    }

    addSubAmount( sumChilds, 0 );
    addSubAmount( subChilds, 1 );

    let result = arry[0] - arry[1];
    alert( 'Puuuu: ' + result );
})
