require 'securerandom'

10.times { p SecureRandom.uuid }

# # Uncomment to insert UUIDs into the JSON file
# lines = []
# IO.readlines('./src/rails.js').each do |line|
#   if /"question": "/ === line
#     lines << %Q[    "id": "#{SecureRandom.uuid}",\n]
#   end
#   lines << line
# end
# File.write('./src/rails2.js', lines.join)

