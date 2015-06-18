use Rack::Static,
  :urls => ["/assets/images", "/assets/javascripts", "/assets/stylesheets", "/assets/fonts", "/drbc_2015_sponsorship.pdf", "/coc.html", "/assets/bower_components/jquery/dist"],
  :root => "public"

run lambda { |env|
  [
    200,
    {
      'Content-Type'  => 'text/html',
      'Cache-Control' => 'public, max-age=86400'
    },
    File.open('public/index.html', File::RDONLY)
  ]
}
