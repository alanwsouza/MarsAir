require_relative "../spec/spec_helper.rb"

class Trip
  @@api_url = 'https://marsair.recruiting.thoughtworks.net/AlanSouza'

  def post_trip(departing, returning, promotional_code)

    form_data = {
      departing: departing,
      returning: returning,
      promotional_code: promotional_code
    }

    response = HTTParty.post("#{@@api_url}",
          headers: { 'Content-Type' => 'application/x-www-form-urlencoded', 
                    "Accept" => "text/html,application/xhtml+xml,application/xml" },
          body: URI.encode_www_form(form_data))

  end

end