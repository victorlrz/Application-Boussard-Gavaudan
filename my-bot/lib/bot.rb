require_relative '../config/environment'

class MyBot < SlackRubyBot::Bot
  command /.*\bhello\b.*$/i do |client, data, _match|
    client.say(channel: data.channel, text: "hi")
  end
end
