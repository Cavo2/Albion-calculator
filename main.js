// Useful functions

Object.prototype.setAttributes = function () {
	let arg = [ ...arguments ];
	for( let i = 0; i < arg.length; i+=2 ) {
			this.setAttribute( arg[i], arg[ i+1 ] );
	}
}

// Get's the last element of an Array

Object.defineProperties(Array.prototype, {
    last: {
        get(){
            return this[this.length - 1]
        }
    }
})




// Get's the two main divs

let sum = document.getElementsByClassName( 'sum' )[0];
let sub = document.getElementsByClassName( 'sub' )[0];

// Create's ADD button div in both main divs

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
    // Calls the Function to create it
newButtonDiv( [ sum, sub ] )




// Get's both ADD div buttons

let firstAddButton = document.getElementsByClassName( 'newButton' )[0];
let lastAddButton = document.getElementsByClassName( 'newButton' )[1];

// Set's create element event listener to the two buttons

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
        parentToLink.insertBefore( div, [ ...parentToLink.children ].last );

        // Calls removeButton function if there is at least 1 Calc div

        removeButton( e )
    })
}
    // Call newElement to add the events
newElement( firstAddButton, sum )
newElement( lastAddButton, sub )

// Add a remove Button, this is called if there is at least 1 Calc div in the section

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

        // Remove this 'removeButton' if there is no Calc div in the section

        if( mainDiv.children.length === 1 ) {
            input.remove()
        }
    })
}


// Get's the Calc input

let calc = document.getElementsByClassName( 'calc' )[ 0 ];


calc.addEventListener( 'click', function() {
    // Get's the childrens of the two main divs
    let sumChilds = sum.children;
    let subChilds = sub.children;

    // Loop into the two divs and sum the values

    function addSubAmount( element ) {
        let result = 0;

        for( let i = 0; i < element.length - 1; i++ ) {
            let arr = [];

            Object.values( element[i].children ).forEach( e => {
                let value = e.children[1].value;
                value === "" ? arr.push( 1 ) : arr.push( parseFloat(value) );
            })

            if( arr[0] !== 1 || arr[1] !== 1 ){
                result += arr[0] * arr[1];
            }
        }

        return result;
    }

    // Get's the values and subtract them

    let add = addSubAmount( sumChilds );
    let subtract = addSubAmount( subChilds );

    let result = add - subtract;

    // Alert the result

    alert( 'Puuuu: ' + result );
})


// Remove all elements if the body is clicked 

document.body.addEventListener( 'click', function ( e ) {
    if ( e.target !== document.body ){
        return;
    }
    function remove ( e ) {
        let childs = e.children;
        while ( childs.length > 1 ) {
            // Clicks the remove's button
            let removeButtonsDiv = [ ...childs ].last;
            let removeButton = [ ...removeButtonsDiv.children ].last;
            removeButton.click();
        }
    }
    remove( sum )
    remove( sub )
})
