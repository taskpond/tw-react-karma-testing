
var path      = require('path');
var $         = require('jquery');
var _         = require('lodash');
var React     = require('react/addons');
var TestUtils = React.addons.TestUtils;
var D         = React.DOM;

console.log('Window:', _.isObject($('window')));
console.log('React:', _.isObject(React));

describe('Sanity test', function() {
  var a;
  it('should be truthy', function() {
    a = true;
    expect(a).toBe(true);
  });
});

// Input (JSX):
// <nav color="blue">
//   <div>first<span>inner</span></div>
//   <div>second<span>inner</span></div>
// <nav>;
// Output (JS):
var TestComponent = (
  D.nav({color: 'blue'},
    D.div({className: 'ace'}, 'first', 
      D.span(null, 'inner span text')
    ),
    D.div({className: 'base'}, 'second', 
      D.span(null, 'inner span text')
    )
  )
);

describe('A simple React component', function() {
  it('should just work', function() {
    a = true;

    // Render our test component in the document
    var TestComp = TestUtils.renderIntoDocument(TestComponent);

    // Verify that div.ace contains the correct text
    var ace = TestUtils.findRenderedDOMComponentWithClass(TestComp, 'ace');
    expect(ace.getDOMNode().textContent).toMatch(/first/);
    expect(ace.getDOMNode().textContent).toMatch(/inner span/);

    // Same for div.base ..
    var base = TestUtils.findRenderedDOMComponentWithClass(TestComp, 'base');
    expect(base.getDOMNode().textContent).toMatch(/second/);
    expect(base.getDOMNode().textContent).toMatch(/inner span/);

  });
});
