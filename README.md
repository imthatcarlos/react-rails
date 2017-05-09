# Rails app w/ react front-end 
## Using [react-rails gem](https://github.com/reactjs/react-rails#use-with-asset-pipeline)

**Install**
```
git clone git@github.com:imthatcarlos/react-rails.git
cd react-rails
```

## Make sure to have rails 5 installed. You can use this [guide](http://installrails.com/)

```
bundle install
bundle exec rake db:create db:migrate
rails server
```

## React components are found within app/assets/javascripts/components

### Rails is an MVC framework, so here is the flow:

#### routes.rb => root to IndexController, action 'show'
#### app/controllers/index_controller.rb => action 'show', render view 'show.html.erb'
#### app/views/index/show.html.erb => renders SampleComponent