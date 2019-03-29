var data = [
  {
    "question": "What will be the output of the following code?\n<code>...</code>",
    "type": "mc",
    "choices": {
      "1": "",
      "2": "",
      "3": "",
      "4": ""
    },
    "answer": "1",
    "tags": [
      "rails5", "-level"
    ],
    "explanation": ""
  },
  {
    "question": "What will be the output of the following code?\n<code>require 'active_support'\n" +
      "class A; KU = [1,2,3]; end\n" +
      "A.delegate :sum, to: :KU\n" +
      "p A.new.sum</code>",
    "type": "mc",
    "choices": {
      "1": "6",
      "2": "[1, 2, 3]",
      "3": ":KU",
      "4": ":sum"
    },
    "answer": "1",
    "tags": [
      "rails5", "advanced-level"
    ],
    "explanation": ""
  },
  {
    "question": "What <code>flash.keep(:notice)</code>does",
    "type": "mc",
    "choices": {
      "1": "Flash value to be carried over to another request",
      "2": "Keep value until it will be cleaned",
      "3": "Returns :notice value",
      "4": "Raise Error"
    },
    "answer": "1",
    "tags": [
      "rails5", "intermediate-level"
    ],
    "explanation": ""
  },
  {
    "question": "What expressions called in the action body will return the controller name?",
    "type": "ma",
    "choices": {
      "1": "params[:controller]",
      "2": "controller_name",
      "3": "params[:controller_name]",
      "4": "controller"
    },
    "answer": ["1", "2"],
    "tags": [
      "rails5", "intermediate-level"
    ],
    "explanation": ""
  },
  {
    "question": "What expressions called in the action body will return the action name?",
    "type": "ma",
    "choices": {
      "1": "params[:action]",
      "2": "action_name",
      "3": "action",
      "4": "params[:action_name]"
    },
    "answer": ["1", "2"],
    "tags": [
      "rails5", "intermediate-level"
    ],
    "explanation": ""
  },
  {
    "question": "What format is correct for describing query string parameter?",
    "type": "mc",
    "choices": {
      "1": "get '/clients/:status'",
      "2": "get '/clients/#status'",
      "3": "get '/clients/[status]'",
      "4": "get '/clients/@status'"
    },
    "answer": "1",
    "tags": [
      "rails5", "beginner-level"
    ],
    "explanation": ""
  },
  {
    "question": "routes.rb contains only one line: <code>resources :books</code>. What contains params of request <code> DELETE /photos/:id</code>",
    "type": "mc",
    "choices": {
      "1": "{ id: '17', controller: 'books', action: 'delete' }",
      "2": "{ id: '17', controller: 'books', action: 'destroy' }",
      "3": "{ id: '17' }"
    },
    "answer": "1",
    "tags": [
      "rails5", "intermediate-level"
    ],
    "explanation": ""
  },
  {
    "question": "What route will not be created by <code>resources :photos</code>",
    "type": "mc",
    "choices": {
      "1": "POST /photos/:id",
      "2": "GET /photos",
      "3": "GET /photos/:id",
      "4": "DELETE /photos/:id"
    },
    "answer": "1",
    "tags": [
      "rails5", "beginner-level"
    ],
    "explanation": ""
  },
  {
    "question": "What amount of routes creates next entry in routing file:\n<code>resource :geocoder\nresolve('Geocoder') { [:geocoder] }</code>",
    "type": "mc",
    "choices": {
      "1": "6",
      "2": "7",
      "3": "5",
      "4": "1"
    },
    "answer": "1",
    "tags": [
      "rails5", "intermediate-level"
    ],
    "explanation": "<p>Because you might want to use the same controller for a singular route (<code>/account</code>) and a plural route (<code>/accounts/45</code>), singular resources map to plural controllers. So that, for example, <code>resource :photo</code> and <code>resources :photos</code> creates both singular and plural routes that map to the same controller (<code>PhotosController</code>).</p>"
  },
  {
    "question": "What route will be generate with next code: <code>get 'profile', action: :show, controller: 'users'</code>",
    "type": "mc",
    "choices": {
      "1": "/users/show",
      "2": "/profile/show",
      "3": "/pfofile/users/show",
      "4": "/users/show/profile"
    },
    "answer": "1",
    "tags": [
      "rails5", "beginner-level"
    ],
    "explanation": ""
  },
  {
    "question": "Which file contains routes config?",
    "type": "mc",
    "choices": {
      "1": "/config/routes.rb",
      "2": "/config/router.rb",
      "3": "/config/routing.rb",
      "4": "/app/router.rb"
    },
    "answer": "1",
    "tags": [
      "rails5", "beginner-level"
    ],
    "explanation": ""
  },
  {
    "question": "What returns path helper <code>edit_photo_path(10)</code> for next entry in routing file <code>resources :photos</code>",
    "type": "mc",
    "choices": {
      "1": "/photos/10/edit",
      "2": "/photos/edit/10",
      "3": "/photos/edit",
      "4": "/photos"
    },
    "answer": "1",
    "tags": [
      "rails5", "beginner-level"
    ],
    "explanation": ""
  },
  {
    "question": "Which helper returns <code>/photos/10<code> for next entry in routing file <code>resources :photos</code>",
    "type": "mc",
    "choices": {
      "1": "photos_path",
      "2": "photo_path",
      "3": "photo_url",
      "4": "photo_view_path"
    },
    "answer": "1",
    "tags": [
      "rails5", "beginner-level"
    ],
    "explanation": ""
  },

  {
    "question": "How to list all routes from command line",
    "type": "mc",
    "choices": {
      "1": "rake routes",
      "2": "rails routes",
      "3": "rake show routes",
      "4": "rails show routes"
    },
    "answer": "1",
    "tags": [
      "rails5", "beginner-level"
    ],
    "explanation": ""
  },
  {
    "question": "Is there valid way to define two actions in the controller?\n<code>before_action :action1\nbefore_action :action2</code>",
    "type": "mc",
    "choices": {
      "1": "yes",
      "2": "no",
      "3": "I don't know"
    },
    "answer": "1",
    "tags": [
      "rails5", "beginner-level"
    ],
    "explanation": ""
  },
  {
    "question": "What does <code>flash.keep(:notice)</code>",
    "type": "mc",
    "choices": {
      "1": "flash value to be carried over to another request",
      "2": "keep value until it it will be cleaned",
      "3": "returns :notice value",
      "4": "Error"
    },
    "answer": "1",
    "tags": [
      "rails5", "intermediate-level"
    ],
    "explanation": ""
  },
  {
    "question": "What method is needed to save a message for display between requests?",
    "type": "mc",
    "choices": {
      "1": "flash.keep",
      "2": "flash.save",
      "3": "flash.store",
      "4": "flash.carry"
    },
    "answer": "1",
    "tags": [
      "rails5", "beginner-level"
    ],
    "explanation": ""
  },
  {
    "question": "What you should write in the controller to prevent filter defined in ApplicationController?",
    "type": "mc",
    "choices": {
      "1": "skip_before_action",
      "2": "before_action",
      "3": "cancel_before_action",
      "4": "disable_before_action"
    },
    "answer": "1",
    "tags": [
      "rails5", "intermediate-level"
    ],
    "explanation": ""
  },
  {
    "question": "Which filters there are in a controller?",
    "type": "mc",
    "choices": {
      "1": "before, after, around",
      "2": "before, after",
      "3": "before, after, custom",
      "4": "before, after, around, custom"
    },
    "answer": "1",
    "tags": [
      "rails5", "beginner-level"
    ],
    "explanation": ""
  },
  {
    "question": "What format is missing in standard Rails installation?",
    "type": "mc",
    "choices": {
      "1": "csv",
      "2": "html",
      "3": "xml",
      "4": "json"
    },
    "answer": "1",
    "tags": [
      "rails5", "intermediate-level"
    ],
    "explanation": ""
  },
  {
    "question": "What type of serializer is missing in Rails",
    "type": "mc",
    "choices": {
      "1": "json",
      "2": "hybrid",
      "3": "custom",
      "4": "xml"
    },
    "answer": "1",
    "tags": [
      "rails5", "intermediate-level"
    ],
    "explanation": ""
  },
  {
    "question": "What will be the value of <code>@user</code>?\n<code>cookies[:user] = { x: -> { 42 }}\n@user = cookies[:user].call</code>",
    "type": "mc",
    "choices": {
      "1": "Error",
      "2": "\"{ x: -> { 42 }}\"",
      "3": "42",
      "4": "nil"
    },
    "answer": "1",
    "tags": [
      "rails5", "intermediate-level"
    ],
    "explanation": ""
  },
  {
    "question": "How to set cookie",
    "type": "mc",
    "choices": {
      "1": "cookies[:name] = 'Grindelwald'",
      "2": "cookies.set(:name, 'Grindelwald')",
      "3": "cookies = {name: 'Grindelwald'}",
      "4": "cookies.write(:name, 'Grindelwald')"
    },
    "answer": "1",
    "tags": [
      "rails5", "beginner-level"
    ],
    "explanation": ""
  },
  {
    "question": "Can flash in controller to contain more than one value?",
    "type": "mc",
    "choices": {
      "1": "yes",
      "2": "no"
    },
    "answer": "1",
    "tags": [
      "rails5", "beginer-level"
    ],
    "explanation": ""
  },
  {
    "question": "What is the purpose of <code>flash.now</code>",
    "type": "mc",
    "choices": {
      "1": "for show message this request",
      "2": "for return all flash values",
      "3": "for return all flash values and remove its"
    },
    "answer": "1",
    "tags": [
      "rails5", "beginner-level"
    ],
    "explanation": ""
  },
  {
    "question": "How to convert word to singular form?",
    "type": "mc",
    "choices": {
      "1": "'posts'.singularize",
      "2": "'posts'.to_singular",
      "3": "'posts'.singular",
      "4": "Rails not contain appropriate method"
    },
    "answer": "1",
    "tags": [
      "rails5", "beginner-level"
    ],
    "explanation": ""
  },
  {
    "question": "after_filter valid options:",
    "choices": {
      "1": ":only, :except, :if, :unless",
      "2": ":only, :except",
      "3": ":only, :except, :every, :noone",
      "4": ":if, :unless"
    },
    "answer": "1",
    "tags": [
      "rails5", "beginner-level"
    ],
    "type": "mc",
    "explanation": ""
  },
  {
    "question": "What type of before_filter call not supported in controllers?",
    "choices": {
      "1": "With String argument",
      "2": "With Symbol argument",
      "3": "With Class argument",
      "4": "With Block"
    },
    "answer": "1",
    "tags": [
      "rails5", "intermediate-level"
    ],
    "type": "mc",
    "explanation": ""
  },
  {
    "question": "Where is the session method not accessible?",
    "type": "mc",
    "choices": {
      "1": "Model",
      "2": "Controller",
      "3": "View",
      "4": "Helper"
    },
    "answer": "1",
    "tags": [
      "rails5", "beginner-level"
    ],
    "explanation": ""
  },
  {
    "question": "What will add the params.require(:person) code to the controller and send the HTTP request with the fields name, age, sometext?",
    "type": "mc",
    "choices": {
      "1": "400 HTTP status",
      "2": "500 HTTP status",
      "3": "Above code returns false",
      "4": "The above code returns only specified params"
    },
    "answer": "1",
    "tags": [
      "rails5", "intermediate-level"
    ],
    "explanation": ""
  },
  {
    "question": "What is the preferred method for naming controllers?",
    "type": "mc",
    "choices": {
      "1": "BooksController",
      "2": "BookController"
    },
    "answer": "1",
    "tags": [
      "rails5",
      "beginner-level"
    ],
    "explanation": ""
  },
  {
    "question": "What's not in Rails?",
    "type": "mc",
    "choices": {
      "1": "ActiveDispatcher",
      "2": "ActiveRecord",
      "3": "ActiveSupport",
      "4": "ActionCable"
    },
    "answer": "1",
    "tags": [
      "rails5",
      "beginner-level"
    ],
    "explanation": ""
  },
  {
    "question": "What does CRUD stand for?",
    "type": "mc",
    "choices": {
      "1": "Create, Read, Update, Delete",
      "2": "Create, Read, Update, Destroy",
      "3": "Create, Reload, Update, Delete",
      "4": "Create, Reload, Update, Destroy"
    },
    "answer": "1",
    "tags": [
      "rails5",
      "beginner-level"
    ],
    "explanation": ""
  },
  {
    "question": "What Does MVC Stand For?",
    "type": "mc",
    "choices": {
      "1": "Model View Controller",
      "2": "Model View Contractor",
      "3": "Model View Compressor",
      "4": "Model View Creator"
    },
    "answer": "1",
    "tags": [
      "rails5",
      "beginner-level"
    ],
    "explanation": ""
  },
  {
    "question": "Which query corresponds to the following code?\n<code>User.order(\"last_name DESC\").limit(1).offset(1)</code>",
    "type": "mc",
    "choices": {
      "1": "SELECT * FROM users ORDER BY last_name DESC LIMIT 1,1;",
      "2": "SELECT * FROM users ORDER BY last_name DESC LIMIT 1 OFFSET 1;",
      "3": "SELECT * FROM users SORT BY last_name DESC LIMIT 1,1;",
      "4": "SELECT * FROM users SORT BY last_name DESC LIMIT 1 OFFSET 1;"
    },
    "answer": "1",
    "tags": [
      "rails5",
      "intermediate-level"
    ],
    "explanation": ""
  },
  {
    "question": "There is animals table.\nid name legs eyes\n1 cat 4 2\n2 dog 4 2\n3 spider 8 8\nWhat will the following code output?\n<code>Animals.where(legs: 4).pluck(:name)</code>",
    "type": "mc",
    "choices": {
      "1": "+ ['cat', 'dog']",
      "2": "[{ name: 'cat' }, { name: 'dog' }]",
      "3": "array of Animal models with models \"cat\" and \"dog\"",
      "4": ""
    },
    "answer": "1",
    "tags": [
      "rails5",
      "intermediate-level"
    ],
    "explanation": ""
  },
  {
    "question": "How to remove row with callbacks",
    "type": "mc",
    "choices": {
      "1": "destroy",
      "2": "delete",
      "3": "drop",
      "4": "remove"
    },
    "answer": "1",
    "tags": [
      "rails5"
    ],
    "explanation": ""
  },
  {
    "question": "What is correct Action Controller filters",
    "type": "ma",
    "choices": {
      "1": "before_action",
      "2": "after_action",
      "3": "around_action",
      "4": "resque_action"
    },
    "answer": [
      "1",
      "2",
      "3"
    ],
    "tags": [
      "rails5"
    ],
    "explanation": ""
  },
  {
    "question": "Flash is a object of",
    "type": "mc",
    "choices": {
      "1": "ActionDispatch",
      "2": "ActiveView",
      "3": "ActionController",
      "4": "ActiveSupport"
    },
    "answer": "1",
    "tags": [
      "rails5"
    ],
    "explanation": ""
  },
  {
    "question": "Select the correct way of model getting:",
    "type": "ma",
    "choices": {
      "1": "Client.find(id: 4)",
      "2": "Client.find_by(id: 4)",
      "3": "Client.find(4)",
      "4": "Client.find_by_id(4)"
    },
    "answer": [
      "2",
      "3",
      "4"
    ],
    "tags": [
      "rails5",
      "intermediate-level"
    ],
    "explanation": "<p>For every field (also known as an attribute) you define in your table, Active Record provides a finder method. If you have a field called <code>first_name</code> on your <code>Client</code> model for example, you get <code>find_by_first_name</code> for free from Active Record. If you have a <code>locked</code> field on the <code>Client</code> model, you also get <code>find_by_locked</code> method.</p>"
  },
  {
    "question": "Is this code correct?\n<code>Product.find_by_sql('SELECT * FROM products')</code>",
    "type": "",
    "choices": {
      "1": "true",
      "2": "false"
    },
    "answer": "1",
    "tags": [
      "rails5"
    ],
    "explanation": ""
  },
  {
    "question": "Which SQL-query generates next code?\n<code>Connection.where(active: true).pluck(:id)</code>",
    "type": "mc",
    "choices": {
      "1": "SELECT id FROM connections WHERE active = 1",
      "2": "SELECT * as id FROM connections WHERE active = 1",
      "3": "SELECT * FROM connections WHERE active = 1 GROUP BY id",
      "4": "SELECT DISTINCT id FROM connections WHERE active = 1"
    },
    "answer": "1",
    "tags": [
      "rails5, advanced-level"
    ],
    "explanation": ""
  },
  {
    "question": "Which SQL-query generates next code?\n<code>Connection.uniq.pluck(: interface)</code>",
    "type": "",
    "choices": {
      "1": "SELECT DISTINCT interface FROM connections",
      "2": "SELECT * FROM connections GROUP BY interface",
      "3": "SELECT DISTINCT FROM connections GROUP BY interface",
      "4": "SELECT DISTINCT interface FROM connections GROUP BY interface"
    },
    "answer": "1",
    "tags": [
      "rails5",
      "intermediate-level"
    ],
    "explanation": ""
  }
];

module.exports = data;


