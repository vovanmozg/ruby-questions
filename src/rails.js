var data = [
  /*
  {
    "id": "",
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

  */
  {
    "id": "7e771363-6a30-471d-949f-e04738993d5a",
    "question": "Using Fillet.zero? you can check if the file is empty.",
    "type": "mc",
    "choices": {
      "1": "true",
      "2": "false"
    },
    "answer": "1",
    "tags": [
      "rails5", "beginner-level"
    ],
    "explanation": ""
  },
  {
    "id": "aae35d84-fcf0-458a-b4e4-383c1ee2227e",
    "question": "How to run Rails server and make it available for queries from the network?",
    "type": "mc",
    "choices": {
      "1": "rails s -b 0.0.0.0",
      "2": "rails s -a 0.0.0.0",
      "3": "rails s -a 127.0.0.1",
      "4": "rails s -b 127.0.0.1"
    },
    "answer": "1",
    "tags": [
      "rails5", "beginner-level"
    ],
    "explanation": ""
  },
  {
    "id": "e284e36c-0164-42a3-9921-eebc7b20de36",
    "question": "What mixin can you use to streaming live data?",
    "type": "mc",
    "choices": {
      "1": "ActionController::Live",
      "2": "ActionController::LiveStreaming",
      "3": "ActionController::Streaming",
      "4": "ActionController::Stream"
    },
    "answer": "1",
    "tags": [
      "rails5", "intermediate-level"
    ],
    "explanation": "https://api.rubyonrails.org/classes/ActionController/Live.html"
  },
  {
    "id": "e7d5b414-22bd-4062-8e27-65c91b44dafc",
    "question": "Where the default 404 template is located?",
    "type": "mc",
    "choices": {
      "1": "public/404.html",
      "2": "public/pages/404.html",
      "3": "app/assets/404.html",
      "4": "app/views/404.html"
    },
    "answer": "1",
    "tags": [
      "rails5", "beginner-level"
    ],
    "explanation": ""
  },
  {
    "id": "e3efe754-d28c-4ea4-b76a-f041f7b71b1e",
    "question": "<code>routes.rb</code> contains only one line: <code>resources :books</code>. " +
      "What action in the <code>Books</code> controller will be called when " +
      "<code>DELETE /books/42</code> is requested?",
    "type": "mc",
    "choices": {
      "1": "destroy",
      "2": "delete",
      "3": "remove",
      "4": "Other"
    },
    "answer": "1",
    "tags": [
      "rails5", "beginner-level"
    ],
    "explanation": ""
  },
  {
    "id": "c82ab160-e234-4bef-ae29-46d13d7837e2",
    "question": "<code>routes.rb</code> contains only one line: <code>resources :books</code>. " +
      "What controller will be used when <code>DELETE /books/42</code> is requested?",
    "type": "mc",
    "choices": {
      "1": "BooksController",
      "2": "BookController",
      "4": "Other"
    },
    "answer": "1",
    "tags": [
      "rails5", "beginner-level"
    ],
    "explanation": ""
  },
  {
    "id": "21a625fe-81da-45d1-9092-93a947129110",
    "question": "What will be the output of the following code?\n<code>'data'.pluralize</code>",
    "type": "mc",
    "choices": {
      "1": "data",
      "2": "datas",
      "3": "Error",
      "4": "Data"
    },
    "answer": "1",
    "tags": [
      "rails5", "beginner-level"
    ],
    "explanation": "https://apidock.com/rails/ActionView/Helpers/TextHelper/pluralize"
  },
  {
    "id": "593ed499-0c23-4560-9e8e-31e4d2aacb9e",
    "question": "What will return the following code?\n<code>'cookie'.pluralize</code>",
    "type": "mc",
    "choices": {
      "1": "cookies",
      "2": "cookie",
      "3": "Cookies",
      "4": "Error"
    },
    "answer": "1",
    "tags": [
      "rails5", "beginner-level"
    ],
    "explanation": "https://apidock.com/rails/ActionView/Helpers/TextHelper/pluralize"
  },
  {
    "id": "44bd78a7-eea6-4ac6-8ef7-22a58ed4721c",
    "question": "What will be the output of the following code?\n<code>handler = File.open(filename)\np handler.pos</code>",
    "type": "mc",
    "choices": {
      "1": "0",
      "2": "IO::START",
      "3": "1",
      "4": "Error"
    },
    "answer": "1",
    "tags": [
      "beginner-level"
    ],
    "explanation": "https://ruby-doc.org/core-2.5.3/IO.html#method-i-pos"
  },
  {
    "id": "99c26a2d-32e9-4ac9-8e31-d60024250bf2",
    "question": "What right ways to disable forgery protection for specific action?",
    "type": "ma",
    "choices": {
      "1": "protect_from_forgery except: :index",
      "2": "skip_before_action :verify_authenticity_token, only: :index",
      "3": "disable_protect_from_forgery only: :index",
      "4": "skip_before_action :verify_authenticity_token, except: :index"
    },
    "answer": ["1", "2"],
    "tags": [
      "rails5", "advanced-level"
    ],
    "explanation": "https://edgeapi.rubyonrails.org/classes/ActionController/RequestForgeryProtection.html"
  },
  {
    "id": "d4dccf8f-9d7b-4e6c-8acd-2a28cedd78ec",
    "question": "What is purpose of <code>protect_from_forgery</code>?",
    "type": "mc",
    "choices": {
      "1": "Protect forms from CSRF",
      "2": "Enables CAPTCHA for forms",
      "3": "Protect models from invalid parameters",
      "4": "Protect forms from DDOS"
    },
    "answer": "1",
    "tags": [
      "rails5", "beginner-level"
    ],
    "explanation": "https://edgeapi.rubyonrails.org/classes/ActionController/RequestForgeryProtection.html"
  },
  {
    "id": "db2d0590-176f-4432-a4c8-1cfcddfb4b58",
    "question": "How to add authentication token to manually created form?",
    "type": "mc",
    "choices": {
      "1": "form_authenticity_token",
      "2": "protect_forgery_token",
      "3": "forgery_protection_token",
      "4": "scrf_token"
    },
    "answer": "1",
    "tags": [
      "rails5", "intermediate-level"
    ],
    "explanation": "https://edgeapi.rubyonrails.org/classes/ActionController/RequestForgeryProtection.html"
  },
  {
    "id": "3c519629-e1c0-4e49-b08e-ac5cc2828e8c",
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
    "id": "a3e73871-1df2-438a-8d2a-29732e7d7542",
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
    "id": "e829551c-49c9-4958-aeea-45d3f8fcd177",
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
    "id": "5c9e64b5-3e27-43b7-89e1-fec6f449a7a2",
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
    "id": "f368779d-d7bf-4b3f-8023-f63fdc64ba46",
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
    "id": "357129a8-e10a-43dd-b862-93660c4a9a48",
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
    "id": "3c04446a-870d-4973-9ba9-59f9936d6abe",
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
    "id": "800195d3-3c3f-43b0-83ae-cc1af65d4566",
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
    "id": "0ae5b431-78dc-4829-889e-1d02e10a5e22",
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
    "id": "8e9bb1a8-83a4-42ad-aa27-eb4d800e42f0",
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
    "id": "2470a912-6c8e-491b-a088-228a755dc8b9",
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
    "id": "defff0eb-6428-4479-8a2c-95cf90ab7f21",
    "question": "Which helper returns `/photos/10` for next entry in routing file `resources :photos`",
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
    "id": "aa34178d-32fb-49ea-90ec-4d81ad354aa3",
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
    "id": "dca6835b-0280-44e7-9628-d18a328e71dd",
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
    "id": "c2e0d785-b300-48d4-8218-97ffb29a3c5c",
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
    "id": "3ef34087-6f37-4ae6-af1f-da63296561e3",
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
    "id": "52e1432d-b1f2-4ea7-9a47-8a079deb00ed",
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
    "id": "d140ba8a-72ac-431e-9c1e-a017526d3b7b",
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
    "id": "98eff2bb-9c4b-4bcf-8e35-ecc7256416c6",
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
    "id": "fe2973ef-7943-4fd7-9a94-a94cfae12099",
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
    "id": "eaea2727-ce49-4582-a53a-2b9d45f984c5",
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
    "id": "a6ca8ec5-1cbc-4acb-8d53-bcc5ab89ea80",
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
    "id": "5ac5f7de-db4f-4df0-a409-d85e9d0e6b21",
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
    "id": "0b58bc2c-d44f-430e-ba41-d2f518c2d904",
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
    "id": "f7cd3106-2fce-4306-a742-32c45a6ae4bd",
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
    "id": "0dd63665-a6f8-4dee-970a-3396fa765adc",
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
    "id": "7e207fae-d0ce-4744-bc8a-d0224b8c623e",
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
    "id": "c6c53b15-4be7-4ffb-b1d1-e0c115d5aabd",
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
    "id": "a6f850fe-e002-4266-b8ee-f145ba9481d5",
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
    "id": "337507ad-c512-49d7-aa5c-4314c1ef3d42",
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
    "id": "67ba56a9-e76e-4dce-b78a-300bc0c2282b",
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
    "id": "1ebfc7d0-724b-4d29-a62d-5a2682a596c7",
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
    "id": "776cb62b-1549-4c71-8968-b9773ef352ac",
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
    "id": "3ca90e1f-09c9-4738-9eeb-1ecef4f9e8af",
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
    "id": "c0e8ac54-bd05-4ab6-8913-7704b35109f9",
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
    "id": "c8a2cd00-ef10-4887-9aed-920537ff0f51",
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
    "id": "55dc85a5-6c99-47d8-907c-5aee51dd06f2",
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
    "id": "385e7c3e-2eb7-4f64-89f9-b48f10947476",
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
    "id": "0dbbedda-0a42-48fe-aec9-c107426b5cfb",
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
    "id": "6a445af4-8ab5-49c1-ac61-abae494d326a",
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
    "id": "660e157e-6dc3-424a-b096-086d71d43c9b",
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
    "id": "1d1acde2-a592-45a4-9c45-8859786f56af",
    "question": "Which SQL-query generates next code?\n<code>Connection.distinct.pluck(:interface)</code>",
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
  },
  {
    "id": "fa6cb816-a018-4c51-937b-00770614059a",
    "question": "What will return the following code?\n<code>5.minutes.to_f</code>",
    "type": "mc",
    "choices": {
      "1": "300.0",
      "2": "300",
      "3": "5",
      "4": "5.0"
    },
    "answer": "1",
    "tags": [
      "beginner-level", "Duration"
    ],
    "explanation": "`minutes` method is defined in ActiveSupport gem. " +
      "`5.minutes` will create a `Duration` object equivalent to 5 minutes. " +
      "When you call the `to_f` method on that object, it will convert the " +
      "duration to a float representation of seconds. Since there are 60 " +
      "seconds in a minute, 5 minutes is equivalent to 300 seconds."
  },
];

module.exports = data;


