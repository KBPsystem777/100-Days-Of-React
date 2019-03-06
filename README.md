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
        ``` jsx
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
        ``` jsx
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

        ``` jsx
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

        ``` jsx
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

        ``` jsx
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
        ``` jsx
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

        ``` jsx
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

        ``` jsx
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
        ```jsx

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
            ``` jsx
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

    ``` jsx
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

    ``` jsx
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

    ``` jsx
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

    ``` jsx
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

    ``` jsx
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

        ``` jsx
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
    
- August 28, 2018 - My Father's Birthday! I'm currently Learning Event Listeners in React. First on the plate is this activity: [React: Add Event Listeners](https://learn.freecodecamp.org/front-end-libraries/react/add-event-listeners) on this activity, the objective here is anytime we press the `Enter` key, a text will display on the UI saying: *"You pressed the enter key!"*. So to do that, we have an initial Component setup on the screen. 2 functions were already added which are `handleKeyPress()` and `handleEnter()`. These two functions actually works the same way. `handleKeyPress()`re-runs `handleEnter()`. We also have two lifecycles in there: `componentDidMount()` and `componentWillUnmount()`. Once `componentDidMount()` was called, an event listener needs to be installed on the UI and then that will listen on the keystrokes on keyboard. As soon as the **Enter** key is pressed, `componentWillUnmount()` will be called. And that lifecycle aims to remove the even listener. So to better understand, here is my working solution for the problem:
    ``` jsx
    class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        message: ''
        };
        this.handleEnter = this.handleEnter.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }
    // change code below this line
    componentDidMount() {
        document.addEventListener('keydown', this.handleEnter.message);
        document.addEventListener('keydown', this.handleKeyPress);
    }
    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleEnter.message);
        document.removeEventListener('keydown', this.handleKeyPress);
    }
    // change code above this line
    handleEnter() {
        this.setState({
        message: this.state.message + 'You pressed the enter key! '
        });
    }
    handleKeyPress(event) {
        if (event.keyCode === 13) {
        this.handleEnter();
        }
    }
    render() {
        return (
        <div>
            <h1>{this.state.message}</h1>
        </div>
        );
    }
    };
    ```
### [Day 22](#day-22)

- August 29, 2018 - Fun to learn the following activities:
    * [Manage Updates with Lifecycle Method](https://learn.freecodecamp.org/front-end-libraries/react/manage-updates-with-lifecycle-methods) - This activiy, introduces `componentWillReceiveProps()` and `componentDidUpdate()` lifecycles. This is my solution for the activity:
        ``` jsx
        class Dialog extends React.Component {
        constructor(props) {
            super(props);
        }
        componentWillUpdate() {
            console.log('Component is about to update...');
        }
        // change code below this line
        componentWillReceiveProps(nextProps) {
            console.log(this.props.nextProps);
        }

        componentDidUpdate() {
            console.log('Component has updated!');
        }
        // change code above this line
        render() {
            return <h1>{this.props.message}</h1>
        }
        };

        class Controller extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
            message: 'First Message'
            };
            this.changeMessage = this.changeMessage.bind(this);
        }
        changeMessage() {
            this.setState({
            message: 'Second Msesage'
            });
        }
        render() {
            return (
            <div>
                <button onClick={this.changeMessage}>Update</button>
                <Dialog message={this.state.message}/>
            </div>
            );
        }
        };
        ```
    * [Optimize Re-Renders with shouldComponentUpdate](https://learn.freecodecamp.org/front-end-libraries/react/optimize-re-renders-with-shouldcomponentupdate) - This exercise is very interesting, in fact I poured a couple of hours to figure this out. Just a heads up, you should go back to basic JavaScript. we need the [Modulo Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder_()) here, an explanation is covered on this [post](https://stackoverflow.com/a/6211660/7478732). It was explained on the post how to identify a number if it's an odd or even using the Modulo operator. Basically the exercise, want to display *even* numbers only on the UI everytime the button is clicked twice. Here is my successful solution:
        ``` jsx
        class OnlyEvens extends React.Component {
        constructor(props) {
            super(props);
        }
        shouldComponentUpdate(nextProps, nextState) {
            console.log('Should I update?');
            // change code below this line
                return nextProps.value % 2 == 0;
            // change code above this line
        }
        componentWillReceiveProps(nextProps) {
            console.log('Receiving new props...');
        }
        componentDidUpdate() {
            console.log('Component re-rendered.');
        }
        render() {
            return <h1>{this.props.value}</h1>
        }
        };

        class Controller extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
            value: 0
            };
            this.addValue = this.addValue.bind(this);
        }
        addValue() {
            this.setState({
            value: this.state.value + 1
            });
        }
        render() {
            return (
            <div>
                <button onClick={this.addValue}>Add</button>
                <OnlyEvens value={this.state.value}/>
            </div>
            );
        }
        };
        ```

### [Day 23](#day-23)

- August 30, 2018 - Styling a component in React. This is an easy activity. Actually in styling a component, you have options like in-line styling and the traditional way of styling an element using `id` and `className`. I answered the following exercises:
    * [React: Introducing Inline Styles](https://learn.freecodecamp.org/front-end-libraries/react/introducing-inline-styles)
    * [Add Inline Styles in React](https://learn.freecodecamp.org/front-end-libraries/react/add-inline-styles-in-react) - Learn how to create a JavaScript object that contains css styling and assign that to a component. Example object:
        ``` jsx
        const styles = {
        color: "purple",
        fontSize: 40,
        border: "2px solid purple"
        }
        ```
        Assigning the `styles` object to a component:
        ``` jsx
        class Colorful extends React.Component {
        render() {
            // change code below this line
            return (
            <div style={ styles }>Style Me!</div>
            );
            // change code above this line
        }
        };
        ```

### [Day 24](#day-24)

- September 4, 2018 - Christmas is coming! I am finally cracked this FCC problem: [Use Advanced JavaScript in React Render Method](https://learn.freecodecamp.org/front-end-libraries/react/use-advanced-javascript-in-react-render-method/) been thinking about this the whole weekend! Truly there will be no problem that's hard to solve if you try to find useful resources/docs. Thanks for the people in [FCC Forum](https://forum.freecodecamp.org)!
Basically the catch here is to change the default value of the const `answer` to a more advance script that will generate a random element for array `possibleAnswers` after you entered a random text on the input field and pressed *Ask the Magic Eight Ball* button.
Here is my working solution for the problem:


    ``` jsx
    const inputStyle = {
    width: 235,
    margin: 5
    }

    class MagicEightBall extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        userInput: '',
        randomIndex: ''
        }
        this.ask = this.ask.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    ask() {
        if (this.state.userInput) {
        this.setState({
            randomIndex: Math.floor(Math.random() * 20),
            userInput: ''
        });
        }
    }
    handleChange(event) {
        this.setState({
        userInput: event.target.value
        });
    }
    render() {
        const possibleAnswers = [
        'It is certain',
        'It is decidedly so',
        'Without a doubt', 
        'Yes, definitely',
        'You may rely on it',
        'As I see it, yes',
        'Outlook good',
        'Yes',
        'Signs point to yes',
        'Reply hazy try again',
        'Ask again later',
        'Better not tell you now',
        'Cannot predict now',
        'Concentrate and ask again',
        'Don\'t count on it', 
        'My reply is no',
        'My sources say no',
        'Most likely',
        'Outlook not so good',
        'Very doubtful'
        ];
        const answer = possibleAnswers[this.state.randomIndex] // << change code here
        return (
        <div>
            <input
            type="text"
            value={this.state.userInput}
            onChange={this.handleChange}
            style={inputStyle} /><br />
            <button onClick={this.ask}>
            Ask the Magic Eight Ball!
            </button><br />
            <h3>Answer:</h3>
            <p>
            { /* change code below this line */ }
                { answer }
            { /* change code above this line */ }
            </p>
        </div>
        );
    }
    };
    ```
    **Review**: [Math.Floor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor) and [Math.Random](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)

### [Day 25](#day-25)

- September 5, 2018. *"One hour coding per weekdays is better the coding 8 hours on Saturdays"* - Alex Kallaway. Yup that's from him! I listened to his podcast yesterday about building consistency on your habits, and I was really amazed. So today I practiced it and make sure I alot 1hr before I start my very fascinating work :P

    Now I am working on this problem: [React: Render with an If/Else Condition](https://learn.freecodecamp.org/front-end-libraries/react/render-with-an-ifelse-condition) So as always, there is a predefined components already on the screen. The task is to create a condition script that if the statement is true, then display this component `X` on the UI. And if it's false, display component `Y`.

    Coming from pure JavaScript perspective, I know how to implement `If/Else Condition` but I am not quite sure how to bring it up to React. I know it's pretty same but the difference is we are going to display components based on the condition not running a certain task, unlike pure JavaScript. So for starters, I went to official React documentation: [Conditional Rendering](https://reactjs.org/docs/conditional-rendering.html) and this [CodePen](https://codepen.io/gaearon/pen/ZpVxNq?editors=0011) script helped me reinforce the idea. So here is my working piece of code for the problem:

    ``` jsx
        class MyComponent extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
            display: true
            }
            this.toggleDisplay = this.toggleDisplay.bind(this);
        }
        toggleDisplay() {
            console.log('displaying wrong....')
            this.setState({
            display: !this.state.display
            });
        }
        render() {
            // change code below this line
            let initialState = this.state.display;
            let falseDisplay =
            ( 
            <div>
                <button>This is False</button>
            </div>
            );
            if(initialState == true) {
            console.log('this is true')
            } else {
            return falseDisplay
            }
            return (
            <div>
                <button onClick={this.toggleDisplay}>Toggle Display</button>
                <h1>Displayed!</h1>
            </div>
            );
        }
        };
    ```
    
### [Day 26](#day-26)

- September 23, 2018 - Been a long time since I pushed commit on this repo! 👏 Let me think... It's 20 days ago 😅 I've been busy earlier workign with our chat application built using React and SocketIO. Seems like I'm almost there, but we'll get there finally. Alright so Im gonna continue where I left off. I've been stucked on this beautiful exercise: [React: Use && for a More Concise Conditional](https://learn.freecodecamp.org/front-end-libraries/react/use--for-a-more-concise-conditional). It is a continuation of the [previous exercise](#day-25) but this time, you will need to use the Logical `AND` operator. It's pretty the same, you'll need to display a `div` and `button` when the `this.state.display` is equals to `false`. This documentation from Offical page is very healthy for this problem: [Conditional Rendering](https://reactjs.org/docs/conditional-rendering.html#inline-if-with-logical-ampamp-operator). This is my working code for the exercise:

    ``` jsx
    class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        display: true
        }
        this.toggleDisplay = this.toggleDisplay.bind(this);
    }
    toggleDisplay() {
        this.setState({
        display: !this.state.display
        });
    }
    render() {
        // change code below this 
        const ThisIsFalse = (
        <div>
            <button>Button</button>
        </div>
        )
        if(this.state.display == true && this.toggleDisplay) {
            console.log('this is true')
        } else {
            return ThisIsFalse
        }

        return (
        <div>
            <button onClick={this.toggleDisplay}>Toggle Display</button>
            <h1>Displayed!</h1>
        </div>
        );
    }
    };
    ```

### [Day 27](#day-27)

- September 24-25, 2018 - Hello! I am ready now for a new React activity. I am still on the conditional rendering. Conditional rendering is very important as explained on this activity: [Use a Ternary Expression for Conditional Rendering](https://learn.freecodecamp.org/front-end-libraries/react/use-a-ternary-expression-for-conditional-rendering). It says, before you use some fancy packages/modules with regards to rendering, this native way of rendering is a must!. Here is the TODO on this activity, from FCC:

    > *The code editor has three constants defined within the CheckUserAge component's render() method. They are called buttonOne, buttonTwo, and buttonThree. Each of these is assigned a simple JSX expression representing a button element. First, initialize the state of CheckUserAge with input and userAge both set to values of an empty string.*

- It took me so long to crack this exercise to I dont wanna explain everything here. Im still on the state of shock that my code works :D This is my working solution:

    ``` jsx

    const inputStyle = {
    width: 235,
    margin: 5
    }

        class CheckUserAge extends React.Component {
        constructor(props) {
            super(props);
            // change code below this line
            this.state = {
            input: '',
            userAge: ''
            }
            // change code above this line
            this.submit = this.submit.bind(this);
            this.handleChange = this.handleChange.bind(this);
        }
        handleChange(e) {
            this.setState({
            input: e.target.value,
            userAge: ''
            });
        }
        submit() {
            this.setState({
            userAge: this.state.input
            });
        }
        render() {
            const buttonOne = <button onClick={this.submit}>Submit</button>;
            const buttonTwo = <button>You May Enter</button>;
            const buttonThree = <button>You Shall Not Pass</button>;
            return (
            <div>
                <h3>Enter Your Age to Continue</h3>
                <input
                style={inputStyle}
                type="number"
                value={this.state.input}
                onChange={this.handleChange} /><br />
                {
                /* change code here */
                this.state.userAge === ''? buttonOne: (this.state.input >= 18? buttonTwo: buttonThree)
                }
            </div>
            );
        }
        };
    ```

- Aside from this activity, I was also busy in making a fun app I called it **[Realtime-Weather](https://github.com/KBPsystem777/realtime-weather)**, basically, my objective was to create an interactive dahsboard like this from MSN: [https://www.msn.com/en-us/weather](https://www.msn.com/en-us/weather) well, I know I need to use Socket.IO for realtime data fetch. Right now, I am still working on the initial UI. Not that much, I need to finish first the GET feature using Axios - the HTTP based data fetch module. I have that setup a bit but still having problem on how to display the fetched data from the API. By the way for the weather data, I am getting it from [DarkSky API](https://darksky.net/dev). Shoutout to all the peeps out there!

### [Day 28](#day-28)
- September 27, 2018. Today, I finished the [Game Of Chance](https://learn.freecodecamp.org/front-end-libraries/react/render-conditionally-from-props) exercises from FCC. This exercise is still a conditional rendering activity but this time, the twist is we are displaying some components based on their `props` values. So the catch on the game is that, there is a button. Once you click the button, it will randomly tell you if you *Win* or you *Lose*. It's random. Meaning, there is no assurance that everytime you click, you will win/lose. It's based on the browser algorithm, no tricks, no skills. Specifically, `Math.random()` is your friend here. This is the code I used to passed the exercise and tests:

    ``` jsx
    class Results extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
        <h1>
        {
            /* change code here */
            this.props.fiftyFifty  == 1 ? 'You Win!' : 'You Lose!'

        }
        </h1>
        )
    };
    };

    class GameOfChance extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        counter: 1
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({
        counter: this.state.counter + 1
        
        });
    }
    render() {
        let expression = Math.random() > .5; // change code here
        console.log(expression)
        return (
        <div>
            <button onClick={this.handleClick}>Play Again</button>
            { /* change code below this line */ }

            <Results fiftyFifty={expression}/>
            { /* change code above this line */ }
            <p>{'Turn: ' + this.state.counter}</p>
        </div>
        );
    }
    };
    ```

- I am very very blessed enough that I got the chance to complete another activity this day. So I got his one: [Change Inline CSS Conditionally Based on Component State](https://learn.freecodecamp.org/front-end-libraries/react/change-inline-css-conditionally-based-on-component-state). The problem is still under Conditional Rendering but this time, it is focused on styling. Life for example, the current style of your button is green but as soon as you clicked it, its color will change to red. Or another example, on forms there are sometimes you are required to enter only a specific of number of characters on the input field, let's say username. Username must have 10 characters only. So if you entered more than 10 characters, the input field will turn into red, or something will get your attention on the UI part. Got it? so here is my sample code, and this is the same code I used to pass the problem:

    ``` jsx
        class GateKeeper extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
            input: ''
            };
            this.handleChange = this.handleChange.bind(this);
        }
        handleChange(event) {
            this.setState({ input: event.target.value })
        }
        render() {
            let inputStyle = {
            border: '1px solid black'
            };
            // change code below this line
            let exceededChar = {
            border: '3px solid red'
            }

            let limit = 15;
            let inputValue = this.state.input;

            if(inputValue.length > 15) {
            inputStyle={
                border: '3px solid red'
            }
            }   
            // change code above this line
            return (
            <div>
                <h3>Don't Type Too Much:</h3>
                <input
                type="text"
                style={inputStyle}
                value={this.state.input}
                onChange={this.handleChange} />
            </div>
            );
        }
        };
    ```

### [Day 29](#day-29)
- September 30, 2018 - At work now and solving the [Use Array.map() to Dynamically Render Elements](https://learn.freecodecamp.org/front-end-libraries/react/use-array-map-to-dynamically-render-elements/). This is about decoding a To-Do-List so I think another puppy died today. Here's the official instructions from FCC:

    > *Inside the constructor, create a this.state object and define two states: userInput should be initialized as an empty string, and toDoList should be initialized as an empty array. Next, delete the comment in the render() method next to the items variable. In its place, map over the toDoList array stored in the component's internal state and dynamically render a li for each item. Try entering the string eat, code, sleep, repeat into the textarea, then click the button and see what happens.*

- Here is my code in completing this:

    ```jsx
    const textAreaStyles = {
    width: 235,
    margin: 5
    };

    class MyToDoList extends React.Component {
    constructor(props) {
        super(props);
        // change code below this line
        this.state = {
        userInput: '',
        toDoList: []
        }
        // change code above this line
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleSubmit() {
        const itemsArray = this.state.userInput.split(',');
        this.setState({
        toDoList: itemsArray
        });
    }
    handleChange(e) {
        this.setState({
        userInput: e.target.value
        });
    }
    render() {
        const items = this.state.toDoList.map((x) => <li>{x}</li>); // change code here
        return (
        <div>
            <textarea
            onChange={this.handleChange}
            value={this.state.userInput}
            style={textAreaStyles}
            placeholder="Separate Items With Commas" /><br />
            <button onClick={this.handleSubmit}>Create List</button>
            <h1>My "To Do" List:</h1>
            <ul>
            {items}
            </ul>
        </div>
        );
    }
    };
    ```
### [Day 30](#day-30)

- October 1, 2018 - Time flies so fast! So today, I worked with the continuation of the yesterday's activity at FCC's React Framework exercises. The work here is to still display the contents of `frontEndFrameworks` array use the `map` method and then use a key to each array elements. Here is my working code:

    ``` jsx

        const frontEndFrameworks = [
        'React',
        'Angular',
        'Ember',
        'Knockout',
        'Backbone',
        'Vue'
        ];

        function Frameworks() {
        const renderFrameworks = frontEndFrameworks.map((x) => (
            <li key={x}>{x}</li>
        ))
        return (
            <div>
            <h1>Popular Front End JavaScript Frameworks</h1>
            <ul>
                {renderFrameworks}
            </ul>
            </div>
        );
        };
    ```

### [Day 31](#day-31)
- October 2, 2018 - Solving this awesome problem: [Use Array.filter() to Dynamically Filter an Array](https://learn.freecodecamp.org/front-end-libraries/react/use-array-filter-to-dynamically-filter-an-array). Instructions:
    > *In the code editor, MyComponent's state is initialized with an array of users. Some users are online and some aren't. Filter the array so you see only the users who are online. To do this, first use filter to return a new array containing only the users whose online property is true. Then, in the renderOnline variable, map over the filtered array, and return a li element for each user that contains the text of their username. Be sure to include a unique key as well, like in the last challenges.*

- Here is my code to finish the problem:

    ```jsx
        class MyComponent extends React.Component {
            constructor(props) {
                super(props)
                this.state = {
                    users: [
                        {
                            username: 'Jeff',
                            online: true
                        },
                        {
                            username: 'Alan',
                            online: false
                        },
                        {
                            username: Mary,
                            online: true
                        },
                        {
                            username: 'Jim',
                            online: false
                        },
                        {
                            username: 'Sara',
                            online: true
                        },
                        {
                            username: 'Laura',
                            online: true
                        }

                    ]
                }
            }
            render() {
                //Change Code here
                const usersOnline = this.state.users.filter((user) => user.online);
                const renderOnline = usersOnline.map(x => 
                    <li key={x.username}>{x.username}</li>
                );
                return(
                    <div>
                        <h1>Current Online Users:</h1>
                        <ul>
                            {renderOnline}
                        </ul>
                    </div>
                )
            }
        }
    
    ```
### [Day 32](#day-32)
- October 3, 2018 - Finally finished the FCC ReactJS curriculum! I am so happy. So for the final exercise, I was introduced to a `ReactDOMServer`. This API was first introduced at [React v16.0.0](https://github.com/facebook/react/releases/tag/v16.0.0) Here is a quick note for the SSR API:
    > *Core team member [Sasha Aickin wrote a great article describing React 16’s SSR improvements.](https://hackernoon.com/whats-new-with-server-side-rendering-in-react-16-9b0d78585d67) According to Sasha’s synthetic benchmarks, server rendering in React 16 is roughly three times faster than React 15. “When comparing against React 15 with process.env compiled out, there’s about a 2.4x improvement in Node 4, about a 3x performance improvement in Node 6, and a full 3.8x improvement in the new Node 8.4 release. And if you compare against React 15 without compilation, React 16 has a full order of magnitude gain in SSR in the latest version of Node!” (As Sasha points out, please be aware that these numbers are based on synthetic benchmarks and may not reflect real-world performance.*

### [Day 33](#day-33)
- **October 5, 2018 - TGIF! Thinking of something new to learn in React** :)
    - I think I will give FCC's [Redux curriculum](https://learn.freecodecamp.org/front-end-libraries/redux)? Yeah and why not? Im going now...
    - On my GitHub repo, I do have some React projects and I want to finish and improve them, so this is a good start to apply what I learned.
    - Completed the first Redux activity in FCC: [Create a Redux Store](https://learn.freecodecamp.org/front-end-libraries/redux/create-a-redux-store)

### [Day 34](#day-34)
- October 7, 2018 - I lost a friend today. Rest in peace my man!. The learning continues. I am right now working on my second activity at Redux. Activities done today:
    - [Get State from the Redux Store](https://learn.freecodecamp.org/front-end-libraries/redux/get-state-from-the-redux-store)
        > *The Redux store object provides several methods that allow you to interact with it. For example, you can retrieve the current state held in the Redux store object with the `getState()` method.*
    - [Define a Redux Action](https://learn.freecodecamp.org/front-end-libraries/redux/define-a-redux-action)
        > *Think of Redux actions as messengers that deliver information about events happening in your app to the Redux store. The store then conducts the business of updating state based on the action that occurred. - FCC*
    - [Define an Action Creator](https://learn.freecodecamp.org/front-end-libraries/redux/define-an-action-creator)
        > An action creator is simply a JavaScript function that returns an action. In other words, action creator creates object that represents action events.
    - [Dispatch an Action Event](https://learn.freecodecamp.org/front-end-libraries/redux/dispatch-an-action-event)
        > dispatch method is what you use to dispatch actions to the Redux store. Calling `store.dispatch()` and passing the value returned from an action creator sends an action back to the store.
        - My working code for the activity: 
            ```javascript
                const store = Redux.createStore(
                    (state = {login: false}) => state
                );

                const loginAction = () => {
                    return {
                        type: 'LOGIN'
                    }
                };

                //Dispatch the Action here:
                store.dispatch(loginAction())
            ```
    - [Handle Action in the store](https://learn.freecodecamp.org/front-end-libraries/redux/handle-an-action-in-the-store). Solution: 
        ```javascript
            const defaultState = {
                login: false
            }

            const reducer = (state = defaultState, action) => {
                //change code below this line:
                if(action.type === 'LOGIN') {
                    return {
                        login: true
                    }
                } else {
                    return defaultState
                }
            }

            const store = Redux.createStore(reducer);

            const loginAction = () => {
                return {
                    type: 'LOGIN'
                }
            }
        ```

### [Day 35](#day-35)
- October 8, 2018 - I think I am going to have an answer now on my long standing problem on the Chat application I am working on. The good guys in FCC Forum helped me realized it as seen on this thread post:
    > https://www.freecodecamp.org/forum/t/can-someone-help-me-figure-out-why-my-react-socket-io-app-does-not-work-on-mobile-using-chrome-safari/232115

    - People at FCC made me realize that the app is looking up a `localhost` connection upon logon that is why the app doesn't work on mobile. Here is the screenshot of the possible issue:
        > ![Hassan's issue](https://discourse-user-assets.s3.dualstack.us-east-1.amazonaws.com/original/3X/a/a/aac356fbf063a0fdc95f5b67c27550a4497623b6.png)

        > [Permalink on the repo](https://github.com/KBPsystem777/react-websocket/blob/bd518465ecb289f830d332f53af4265d9a999de9/src/FrontEnd/Layout.js#L7)

        
### [Day 36](#day-36)
- October 15, 2018 - How are you guys! The learning continues. I want to go ahead and review React I always have the feeling that I missed something after days of pressing the pause button in learning and coding. So I want to go through on this fresh article from FCC medium by Ohans Emmanuel as well as this intro for Redux from Traversy Media, I'll share my notes later:
    - [These React Fundamentals You Skip may be Killing You](https://medium.freecodecamp.org/these-react-fundamentals-you-skip-may-be-killing-you-7629fb87dd4a)
    - [Redux crash Course with React](https://youtu.be/93p3LxR9xfM)


### [Day 37](#day-37)
- October 18, 2018 - Done reading the *[React Fundamentals You Skip may be Killing you, by Ohans Emmanuel](https://medium.freecodecamp.org/these-react-fundamentals-you-skip-may-be-killing-you-7629fb87dd4a)* I dont know if I understand anything but as far as I can remember, there is an argument on the article tackling the **Wasted Render**. Actually, this is considered as an issue as per Ohans, cause for example, we have a `parent` component. And the parent has 3 child components namely, Component `A`, `B` and Component `C`. Suppose the parent component want to pass a prop called `name` with the value of `Ohans` on the component `C`. Later on, the `name` prop will change to `Koleen`. That being said, React will re-render the entire parent component including component `A` and `B` even though they are not affected by the prop changes that was implemented on the Component `C`. And that is what he called as `Wasted Render` as far as I understand. Technically, that may produce a minimal performance downtime. You may not be affected by the update so bad but still the underlying performance issue is still in there. The core React team actually built some tools in order to monitor, count and get the measurement of the perf issue on your application. Just care to read: [https://reactjs.org/docs/perf.html](https://reactjs.org/docs/perf.html)

### [Day 38](#day-38)
- March 5, 2019 - Been so long since I logged an entry here, so here I am again. For the past few months, just an update, I got a developer job @ **MCAP Advertising**, not that big but it feels as a fulfilling job. I already shipped two sites in there but all of them are just vanilla JS and `html` sites. For the first project I got there, I am still maintaining it. It is a website for a construction firm. Industries like that doesn't really need powerful frameworks to power thier sites up. So I decided to go simple as possible which I believe is the right way. Aside from that, from the lasts months, I've been learning GraphQL. I got overwhelmed so I turned to re-read [YDKJS](https://kbpsystem777.github.io/You-Dont-Know-JS/). Fast forward to today, I am investing a knowledge in React SSR (Server Side Rendering), using Next.js


### [Day 39](#day-39)
- March 6, 2019 - Today, I am still working on my React SSR lesson in Next.js. I found it very satisfying. Right now, I do have 290 points, cause you'll gonna earn points every time you complete a lesson. On this stage, I was introduced to [`isomorphic-unfetch`](https://github.com/developit/unfetch). This library is a simple implementation of `fetch` API that works both on server and client side. I haven't got the chance to explore on it but I'll get there somehow. 

- **09:44 PM**: Finally completed the **Fetching Data for Pages** activity on https://nextjs.org/learn. Basically, I am able to fetch data now from the TV Maze API. Next to do in the future is the further read and understand the `getInitialProps` and *data fetching* of this library.


- **11:30 PM**: Read a blog from Dan -  [Why Do We Write super(props)?](https://overreacted.io/why-do-we-write-super-props/). On this post, he explained the pros and cons of using `super(props)` in on both JavaScript and React ecosystems.





##### *[MIT LICENSE](https://raw.githubusercontent.com/KBPsystem777/100-Days-Of-React/master/LICENSE)*
