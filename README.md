# Koleen Paunon's 100-Days-Of-React journey
*This serves as my coding logs throughout my #ReactJS learning*

I have previously pushed bunch of React codes to our start-up repo only to found out that I am missing something. I'm missing the true fundamentals of React, which is the most important in learning it. So in order to refresh my memory and keep things running, I paused, reflect and trying to grasp React one more time but this time, in an elegant way > 

---

## Coding Logs

### [Day 1](#day-1)

- Following tutorials from [30 Days Of React](https://github.com/fullstackreact/30-days-of-react) and following the exercises for Notification panel. Had a hard time in getting the CSS for the view but I changed my mind to use [w3-css](https://github.com/fullstackreact/30-days-of-react) stylesheet.

- I found the instructions for the `<Timeline />` component is too large so I broke it up into a 3 different *React Component*

- Had a clear understanding of basic React `props` and implemented it on the components. As you can see on the following commits:
    * [{this.props.time}](https://github.com/KBPsystem777/30-Days-Of-React/commit/1bcd3247e9d26b525945d733c81ccc8a73948043#diff-14b1e33d5bf5649597cdc0e4f684daddR17)

    * [Output](https://github.com/KBPsystem777/30-Days-Of-React/commit/1bcd3247e9d26b525945d733c81ccc8a73948043#diff-14b1e33d5bf5649597cdc0e4f684daddR48)


### [Day 2](#day-2)

- Still studying how to display data in React using the JSON via props.

- I did this method using the `map()` function in JavaScript. Challenge right now is the manipulation of array objects - I need to dig hard on `objects`


### [Day 3](#day-3)

- Just watched some YouTube videos today discussing `props` in order to have deeper understanding of it. Here are my personal recommendations:

    * [Passing Data with Props](https://www.youtube.com/watch?v=GIU8ekYndKw&index=2&list=PLdVadnqHPMJEY8Dz4DdHAqrounEZJ0x6M&t=0s)

    * [React Props](https://www.youtube.com/watch?v=i1PLMgtG5Qo&index=4&list=PLdVadnqHPMJEY8Dz4DdHAqrounEZJ0x6M&t=2s)

### [Day 4](#day-4)

- After days of nightshift and overtime at work, this is my updates:

    * Currently found a new book in GitBook: https://legacy.gitbook.com/book/chrisnoring/react/details

     * Im gonna give [FreeCodeCamp's React Curriculum](https://learn.freecodecamp.org/front-end-libraries/react) a shot today.

    * I am actually overwhelmed by the facts and plenty of resources about React, either online content: videos/ebook/PDFs/blogs and so on. My advise is that stick to your current resource and dont let any material(s) distract your goals. It happens to me all the time.

### [Day 5](#day-5)

- Early morning activity with these FreccCodeCamp React exercises:

    * [Compose React Components](https://learn.freecodecamp.org/front-end-libraries/react/compose-react-components/)

    * [Render Class Component to DOM](https://learn.freecodecamp.org/front-end-libraries/react/render-a-class-component-to-the-dom)

    * [React Component from Scratch](https://learn.freecodecamp.org/front-end-libraries/react/write-a-react-component-from-scratch)

    * [Pass Props to a Stateless Functional component](https://learn.freecodecamp.org/front-end-libraries/react/pass-props-to-a-stateless-functional-component)

    * [Pass an array as props](https://learn.freecodecamp.org/front-end-libraries/react/pass-an-array-as-props)
    *Sample:*
        ```
        const List = (props) => {
            return <p>{props.tasks.join(', ')</p>
        }

        class ToDo extends React.Component {
            constructor(props) {
                super(props);
            }

            render() {
                return(
                    <div>
                        <h1>To Do Lists</h1>
                        <h2>Today</h2>
                        <List tasks = {["learn", "code", "learn", "code", "repeat"]}>
                        <h2>Tomorrow</h2>
                        <List tasks = {["code", "code", "code"]}>
                    </div>
                );
            }
        }
        ```
    * [Use default Props](https://learn.freecodecamp.org/front-end-libraries/react/use-default-props)

### [Day 6](#day-6)

- Doing FreeCodeCamp [#ReactJS](https://twitter.com/search?q=%23reactjs&src=typd) exercises at 6:00 AM after work.

- Sounds clear to me now what's the difference between `props` and `states`. We use `props` for passing absolute data/values in the components. When I say absolute I mean fixed values that you think will not change throughout the lifecycle. In contrary to that, we have `states`. States handles all the changing values in the components.

- Watching and still analyzing these ReactJS videos:

    * [Events in React](https://www.youtube.com/watch?v=OcM__8q6p4c)

    * [State of Components](https://www.youtube.com/watch?v=e5n9j9n83OM)

### [Day 7](#day-7)

- Doing ReactJS activities before going to work:

    * [Override Default Props](https://learn.freecodecamp.org/front-end-libraries/react/override-default-props)

    * [Use PropTypes to Define the Props you expect](https://learn.freecodecamp.org/front-end-libraries/react/override-default-props/) - Had a hardtime on this challenge. Basically, I need to restrict the props `quantity` to be a number only type of props. So after read and search via [PropTypes NPM docs](https://www.npmjs.com/package/prop-types) I got the hint on what to do. My passing code:
        ```
        const Items = (props) => {
        return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
        };

        // change code below this line
        Items.propTypes = {
        quantity: PropTypes.number.isRequired
        };
        // change code above this line

        Items.defaultProps = {
        quantity: 0
        };

        class ShoppingCart extends React.Component {
        constructor(props) {
            super(props);
        }
        render() {
            return <Items />
        }
        };
        ```
    * [Access Props using this.props](https://learn.freecodecamp.org/front-end-libraries/react/access-props-using-this-props) - This activity is kinda actually the same with what I did on Day 1. Here is my complete solution for the problem:

        ```
        class ReturnTempPassword extends React.Component {
        constructor(props) {
            super(props);

        }
        render() {
            return (
                <div>
                    { /* change code below this line */ }
                    <p>Your temporary password is: <strong>{this.props.tempPassword}</strong></p>
                    { /* change code above this line */ }
                </div>
            );
        }
        };

        class ResetPassword extends React.Component {
        constructor(props) {
            super(props);

        }
        render() {
            return (
                <div>
                <h2>Reset Password</h2>
                <h3>We've generated a new temporary password for you.</h3>
                <h3>Please reset this password from your account settings ASAP.</h3>
                { /* change code below this line */ }
                <ReturnTempPassword tempPassword={'qwertyui'} />
                { /* change code above this line */ }
                </div>
            );
        }
        };
        ```

### [Day 8](#day-8)

- Rainy morning here @CyberGate2, still awake and answering this React exercise before going home:
    * [Review Using props with Stateless Functional Component](https://learn.freecodecamp.org/front-end-libraries/react/review-using-props-with-stateless-functional-components) - Finally in here I learned how to validate props or assign a property to props in here I was tasked to restrict the props to be `string` only. And then assign a default `prop` value. Here's my solution:

        ```
        class Camper extends React.Component {
        constructor(props) {
            super(props);
        }
        render() {
            return(
            <div>
                <p>{this.props.name}</p>
            </div>
            );
        }
        }

        Camper.propTypes = {
        name: PropTypes.string.isRequired
        };

        Camper.defaultProps = {
        name: 'CamperBot'
        };


        class CampSite extends React.Component {
        constructor(props) {
            super(props);
        }
        render() {
            return (
            <div>
                <Camper name = {'KBPsystem'} />
            </div>
            );
        }
        };
        // change code below this line

        ```

### [Day 9](#day-9)

- Just got busy at work so I'm home now solving FreeCodeCamp's ReactJS problems. Answered the following exercises:
    * [Creating Stateful Components](https://learn.freecodecamp.org/front-end-libraries/react/create-a-stateful-component/).
        My Solution:

        ```
        class StatefulComponent extends React.Component {
        constructor(props) {
            super(props);
            // initialize state here
            this.state = {
            name: 'Koleen Paunon'

            }
        }
        render() {
            return (
            <div>
                <h1>{this.state.name}</h1>
            </div>
            );
        }
        };
        ```
    * [Render State in the User Interface](https://learn.freecodecamp.org/front-end-libraries/react/render-state-in-the-user-interface) - One thing I learned here is that `state` state is responsible in tracking your data changes in your app and then renders those change on the UI. When state data updates, it triggers a re-render of UI in all components up to child level that is using the same data as prop. Here is my solution for the activity:
        ```
        class MyComponent extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
            name: 'freeCodeCamp'
            }
        }
        render() {
            return (
            <div>
                { /* change code below this line */ }
                <h1>{this.state.name}</h1>
                { /* change code above this line */ }
            </div>
            );
        }
        };
        ```


### [Day 10](#day-9)

- Currently here at [Lopez, Quezon](https://en.wikipedia.org/wiki/Lopez,_Quezon) doing the following ReactJS challenges:
    
    * [Render State in the User Interface Another Way](https://learn.freecodecamp.org/front-end-libraries/react/render-state-in-the-user-interface-another-way) - Teaches an idea on how to access React `state` using pure JavaScript. My Solution:

        ```
        class MyComponent extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
            name: 'freeCodeCamp'
            }
        }
        render() {
            // change code below this line
            const name = this.state.name
            // change code above this line
            return (
            <div>
                { /* change code below this line */ }
                <h1>{ name }</h1>
                { /* change code above this line */ }
            </div>
            );
        }
        };
        ```

###  [Day 11](#day-11)

- I'm back home after almost 7 hours of driving. [Pacquiao won again today!](http://www.espn.com/boxing/story/_/id/24100683/manny-pacquiao-ko-lucas-matthysse-7th-round-claim-wba-welterweight-title) Still working on my React skills/ here's what I'm working on today:
    * [Set State with this.setState](https://learn.freecodecamp.org/front-end-libraries/react/set-state-with-this-setstate) - On this activity, you'll understand how your app will display real time results when somthing changed on the data, like for example you what to display something on the UI after a button has been clicked. You may consult React Docs [here](https://reactjs.org/docs/state-and-lifecycle.html). Example from the activity:

        ```
        class MyComponent extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
            name: 'Initial State'
            };
            this.handleClick = this.handleClick.bind(this);
        }
        handleClick() {
            // change code below this line
            this.setState({
            name: 'React Rocks!'
            })
            // change code above this line
        }
        render() {
            return (
            <div>
                <button onClick={this.handleClick}>Click Me</button>
                <h1>{this.state.name}</h1>
            </div>
            );
        }
        };
        ```
### [Day 12](#day-12) 

- July 17, 2018 - I got flu today and we have a typhoon here in Manila right now. Trying to solve some ReactJS activities before slowing down and take a rest. Actually, I should say I have no activity for this day cause my flu got worse. I will continue on Day 13 :)

### [Day 13](#day-13)

- July 20, 2018 - I'm back after days of fighting to flu and work deadlines. Today, I learned binding `this` to a Class method. Worked on this challenge which is a lot of `this`

    * [Bind 'this' to a Class Method](https://learn.freecodecamp.org/front-end-libraries/react/bind-this-to-a-class-method) - The exercise is actually re-introducing me to *React Events handling*. I said re-introduction because I've done it before on some of my projects but the problem is that I didn't understand it. 
    So here is my solution to the problem.
        ```
        class MyComponent extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
            itemCount: 0
            };
            // change code below this line
            this.addItem = this.addItem.bind(this);
            // change code above this line
        }
        addItem() {
            this.setState({
            itemCount: this.state.itemCount + 1
            });
        }
        render() {
            return (
            <div>
                { /* change code below this line */ }
                <button onClick={ this.addItem }>Click Me</button>
                { /* change code above this line */ }
                <h1>Current Item Count: {this.state.itemCount}</h1>
            </div>
            );
        }
        };
        ```

### [Day 14](#day-14)

- July 27, 2018 - I'm back to React. I am still as work right now. It's 4:16am and I am studying this activity from FreeCodeCamp. 
    - [React: Use State to Toggle an Element](https://learn.freecodecamp.org/front-end-libraries/react/use-state-to-toggle-an-element). The main objective on this activity is that there is a `<button>` and this button should show something on the screen after I clicked it. And once I clicked it again, that text display on my screen should be gone, and vice versa. So i short, a pop up text will come and go after I click the button. Like ON-OFF-ON-OFF...
    My solution:
        ```
        class MyComponent extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
            visibility: false
            };
            // change code below this line
            this.toggleVisibility = this.toggleVisibility.bind(this);

            // change code above this line
        }
        // change code below this line
        toggleVisibility(){
            this.setState({
            visibility: !this.state.visibility
            });
        };
        // change code above this line
        render() {
            if (this.state.visibility) {
            return (
                <div>
                <button onClick={this.toggleVisibility}>Click Me</button>
                <h1>Now you see me!</h1>
                </div>
            );
            } else {
            return (
                <div>
                <button onClick={this.toggleVisibility}>Click Me</button>
                </div>
            );
            }
        }
        };
        ```
 - I got the chance to watch this video: [React State and Class](https://www.youtube.com/watch?v=RTAxNwa0KzY) so that I can refresh my memory about States for the past days that I havent touched React. Also this weekend, I am planning to go through these React tutorials playlist: [React Tutorial 2017](https://www.youtube.com/playlist?list=PLkEZWD8wbltnXlfyhS5qSMTNb26utkOkI) by Ihatetomatoes

- I solved the *[Write a Simple Counter](https://learn.freecodecamp.org/front-end-libraries/react/write-a-simple-counter)* exercise. The objectve here is make a counter which has 3 buttons namely, Increment, Decrement and Reset. The initial state on the counter is 0. Clicking the each buttons will have the following effect:
    * *Increment*: +1
    * *Decrement*: -1
    * *Reset*: Total Reset. Rolls-back the counter value to 0
    > I experienced some bugs on this exercise which I appended on the issue [#17545](https://github.com/freeCodeCamp/freeCodeCamp/issues/17545#issuecomment-408548253)

    ```
    class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        count: 0
        };
        // change code below this line
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
        this.reset = this.reset.bind(this)
        // change code above this line
    }
    // change code below this line
    increment(){
        this.setState({
        count: this.state.count + 1
        });
    };

    decrement(){
        this.setState({
        count: this.state.count -1
        });
    };

    reset(){

        this.setState({
        count: 0
        })
    }
    // change code above this line
    render() {
        return (
        <div>
            <button className='inc' onClick={this.increment}>Increment!</button>
            <button className='dec' onClick={this.decrement}>Decrement!</button>
            <button className='reset' onClick={this.reset}>Reset</button>
            <h1>Current Count: {this.state.count}</h1>
        </div>
        );
    }
    };
    ```

### [Day 15](#day-15)

- July 31, 2018. By the way I created a Messaging app yesterday for our start up group. You may check out [this](https://github.com/KBPsystem777/Chat-Application). Alrigh that project is a `work-in-progress` app, and I am hoping to finish it as fast as possible. Early morning today, I am hacking this FCC exercise: [Create a Controlled Input](https://learn.freecodecamp.org/front-end-libraries/react/create-a-controlled-input).
This challenge is preparing you for the future! It actually introduces you how React works in forms and input elements in html. The objective of the challenge is you type something on the `input` field and you should instruct React to display what was type on the input area. Here is my working solution for the challenge:

    ```
    class ControlledInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        input: ''
        };
        // change code below this line
        this.handleChange = this.handleChange.bind(this);
        // change code above this line
    }
    // change code below this line
    handleChange(event){
        event.preventDefault();
        this.setState({
        input: event.target.value
        });
    }
    // change code above this line
    render() {
        return (
        <div>
            { /* change code below this line */}
            <input value = { this.state.input} onChange={this.handleChange.bind(this)}></input>
            { /* change code above this line */}
            <h4>Controlled Input:</h4>
            <p>{this.state.input}</p>
        </div>
        );
    }
    };
    ```
    This docs helped me understand the problem better:
    > [https://guide.freecodecamp.org/certifications/front-end-libraries/react/create-a-controlled-input](https://guide.freecodecamp.org/certifications/front-end-libraries/react/create-a-controlled-input)

### [Day 16](#day-16)

- August 1, 2018. My birthday coming soon! This activity is just a continuation of the [Day 15](#day-15) exercise.
The objective here is almost the same with Day 15. So you will need to enter some text on the input field and once you clicked `Submit` button, React should display your inputs on `h1` tag.
There is 2 functions created in here the `handleChange` and `handleSubmit`. These functions should handle the events being fired on the front end.
`handleChange` => keeps track of the user input on the input field.
`handleSubmit` => gets the value of the input element and pass it on the h1 tag as soon as the submit button was fired up. Here is my solution for the challenge:

    ```
    class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        input: '',
        submit: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        event.preventDefault();
        this.setState({
        input: event.target.value
        });
    }
    handleSubmit(event) {
        // change code below this line
        event.preventDefault();
        this.setState({
        submit: this.state.input
        })
        // change code above this line
    }
    render() {
        return (
        <div>
            <form onSubmit={this.handleSubmit}>
            { /* change code below this line */ }
            <input value = {this.state.input} onChange = {this.handleChange}></input>
            { /* change code above this line */ }
            <button type='submit' onClick = {this.handleSubmit.bind(this)}>Submit!</button>
            </form>
            { /* change code below this line */ }
            <h1>{this.state.submit}</h1>
            { /* change code above this line */ }
        </div>
        );
    }
    };
    ```

### [Day 17](#day-17)
- August 2, 2018. The activity for today is [Pass State as Props to Child Components](https://learn.freecodecamp.org/front-end-libraries/react/pass-state-as-props-to-child-components). This opens my mind on how React works with it's components like passing data from one component to another (parent-to-child, child-parent and sibling-siblings). On the said activity, I was task to allow the `Nav` component which is the child to access the data in the parent constructor which is the `App` component, and display it on the UI. This [Stack overflow post](https://stackoverflow.com/a/39401252/7478732) helped me in solving the problem. Here is my working solution:

    ```
    class MyApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        name: 'CamperBot'
        }
    }
    render() {
        return (
        <div>
            <Navbar name={this.state.name} />
        </div>
        );
    }
    };

    class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
        <div>
        <h1>Hello, my name is: {this.props.name} </h1>
        </div>
        );
    }
    };
    ```
### [Day 18](#day-18)

- August 3, 2018. I am currently doing the [Pass a Callback as Props](https://learn.freecodecamp.org/front-end-libraries/react/pass-a-callback-as-props) and I am actually clueless on what's going on here. Basically, this challenge is just a continuation of the previous one, and almost identical with the last 2-3 exercises.
Okay, so there is a parent component, whic is ths `MyApp` and it has two child components namely `GetInput` which is responsible in rendering the input element on the UI as well as an `h3` element. Another one is the `RenderInput` component which is responsible in displaying the user input from the `GetInput` component. `GetInput` should be handling all the changes on the Input element and pass those data on the `MyApp` component. Here is my solution for this:

    ```
    class MyApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        inputValue: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        event.preventDefault();
        this.setState({
        inputValue: event.target.value
        });
    }
    render() {
        return (
        <div>
            { /* change code below this line */ }
            <GetInput input={this.state.inputValue} handleChange={this.handleChange}/>
            <RenderInput input={this.state.inputValue}/>
            { /* change code above this line */ }
        </div>
        );
    }
    };

    class GetInput extends React.Component {
    constructor(props) {
        super(props);
        
    }
    render() {
        return (
        <div>
            <h3>Get Input:</h3>
            <input
            value={this.props.input}
            onChange={this.props.handleChange}/>
        </div>
        );
    }
    };

    class RenderInput extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
        <div>
            <h3>Input Render:</h3>
            <p>{this.props.input}</p>
        </div>
        );
    }
    };
    ```

### [Day 19](#day-19)

- August 4, 2018. Happy Weekend!!! This day, we are being introduced by FreeCodeCamp to React Lifecycle methods or others calls it Lifecycle hooks. Here are the list of Lifecycles:

    * `componentWillMount()`
    * [`componentDidMount()`](https://reactjs.org/docs/react-component.html#componentdidmount)
    * `componentWillReceiveProps()`
    * [`shouldComponentUpdate()`](https://reactjs.org/docs/react-component.html#shouldcomponentupdate)
    * `componentWillUpdate()`
    * [`componentDidUpdate()`](https://reactjs.org/docs/react-component.html#componentdidupdate)
    * [`componentWillUnmount`](https://reactjs.org/docs/react-component.html#componentwillunmount)

Good intro about React LifeCycle: [https://www.youtube.com/watch?v=Oioo0IdoEls](https://www.youtube.com/watch?v=Oioo0IdoEls)


### [Day 20](#day-20)

- August 9, 2018. Been busy lately with work and projects at our start up like instant messaging app and studying [WebSocket](https://www.npmjs.com/package/websocket), [Socket.IO](https://socket.io/).

- August 21, 2018. Finally, got the chance to continue this journey! My birthday just got passed and it was awesome. Today I just added some links on the LifeCycle APIs above on [Day 19](#day-19). Aside from that I was able to complete the prototype for our chat application running in React. I called it [Reactifyd-Chat](https://reactfyd-chat-nlpiwzxyxo.now.sh/)


- August 22, 2018. Back to back in React. And solved the following exercises:
    * [Use the Lifecycle Method componentDidMount](https://learn.freecodecamp.org/front-end-libraries/react/use-the-lifecycle-method-componentdidmount) - On this activity, the explanations are pretty clear and main objective here is that you are calling an API endpoint that contains the data which is the total numbers of `activeUsers`. So, the plan is that on the front end, once `MyComponent` was render into the DOM, you should be able to display on the UI how many users are active right now, based on the data stored on `activeUsers` API, after 2.5 seconds. Looks tough huh? Well not really, here is my working code:

    ```
    class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        activeUsers: null
        };
    }
    componentDidMount() {
        setTimeout( () => {
        this.setState({
            activeUsers: 1273
        });
        }, 2500);
    }
    render() {
        return (
        <div>
            <h1>Active Users: { this.state.activeUsers }</h1>
        </div>
        );
    }
    };
    ```
### [Day 21](#day-21)
    
    - August 24, 2018 - 
