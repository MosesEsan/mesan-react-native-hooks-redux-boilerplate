# Tutorial 1a : React Native with React Hooks and Redux Boilerplate

Boilerplate for a React Native iOS and Android app using Redux

### DemoInline-style: 
![Demo](https://github.com/MosesEsan/mesan-react-native-hooks-redux-boilerplate/blob/master/demo.gif "demo")

### Tutorial
<ul>
  <li><a href="#step1">Step 1: Create React Native Project</a></li>
  <li><a href="#step2">Step 2: Install Dependencies</a></li>
  <li><a href="#step3">Step 3: Create Folder Structure</a></li>
  <li><a href="#step4">Step 4: Create Your First Action</a></li>
  <li><a href="#step5">Step 5: Create Your First Reducer</a></li>
  <li><a href="#step6">Step 6: Create Your Store</a></li>
  <li><a href="#step7">Step 7: Create Your Component</a></li>
  <li><a href="#step8">Step 8: Link It All Together</a></li>
  <li><a href="#step9">Step 9: Test</a></li>
</ul>

<a name="step1"></a>
### Step 1: Create React Native Project

Open terminal and run
```bash
expo init ProjectName
cd ProjectName
```

<a name="step2"></a>
### Step 2: Install Dependencies

In your project root, run
```bash
npm i --save redux react-redux redux-thunk axios
```

<a name="step3"></a>
### Step 3: Create Folder Structure

In your project root create an app folder. In the app folder create an <b>actions.js</b>, <b>reducers.js</b> <b>store.js</b> files and a <b>components</b> folder and <b>instructions.json</b>..


<a name="step4"></a>
### Step 4: Create Your First Action

Actions are payloads of information that send data from your application to your store. They are the only source of information for the store. You send them to the store using store.dispatch().
Action creators are exactly that — functions that create actions.
<br>
Updated the <b>actions.js</b> file, in here we will create our actions and action creators.

```javascript
export const DATA_AVAILABLE = 'DATA_AVAILABLE';

export const addData = (data) => ({
    type: DATA_AVAILABLE,
    data
});

```

<a name="step5"></a>
### Step 5: Create Your First Reducer

The reducers are in charge of updating the state of the app based on the actions passed to the store.

The combineReducers helper function turns an object whose values are different reducing functions into a single reducing function you can pass to createStore. 

Available on my <a href="https://medium.com/@mosesesan/tutorial-1a-react-native-with-react-hooks-and-redux-boilerplate-75014ca8dee4" target="_blank">blog</a>.

<a name="step6"></a>
### Step 6: Create Your Store

…the actions represent the facts about “what happened” and the reducers that update the state according to those actions.

The Store is the object that brings them together.

Update <b>store.js</b> file. In this file, create the redux store by importing the root reducer and injecting the Redux Thunk middleware.

Available on my <a href="https://medium.com/@mosesesan/tutorial-1a-react-native-with-react-hooks-and-redux-boilerplate-75014ca8dee4" target="_blank">blog</a>.

<a name="step7"></a>
### Step 7: Create Your Component

In your components folder create a js file <b>home.js</b>

Available on my <a href="https://medium.com/@mosesesan/tutorial-1a-react-native-with-react-hooks-and-redux-boilerplate-75014ca8dee4" target="_blank">blog</a>.

<a name="step8"></a>
### Step 8: Link It All Together

The App.js file is the entry point into the app. In this file, the redux store is connected to the Redux provider, giving the app access to the redux state.

The app’s router is wrapped with the Provider.

The <Provider /> makes the Redux store available to any nested components that have been wrapped in the connect() function.

Update App.js file.

Available on my <a href="https://medium.com/@mosesesan/tutorial-1a-react-native-with-react-hooks-and-redux-boilerplate-75014ca8dee4" target="_blank">blog</a>.

<a name="step9"></a>
### Step 9: Test

Run the command below to test the app.
This will start a development server for you, and print a QR code in your terminal. If you are using the Expo app, you can scan the QR code.

```bash
$ expo start

```

