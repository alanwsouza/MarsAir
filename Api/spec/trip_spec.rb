require_relative "../API/trip.rb"

describe 'Test Api' do

  before (:all) do
    @trip = Trip.new
   end
    
  context 'Trip' do
      it "Post Trip with a Promotional Code" do
          trip = @trip.post_trip(1,4, 'AF3-FJK-418')
          expect(trip.code).to eq(200)
          puts trip
      end
  end 
end