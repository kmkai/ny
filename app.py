import streamlit as st

st.title('Min AI App')
st.write('Velkommern til min AI app som får oppdateringer.')
st.image('https://www.aitimejournal.com/wp-content/uploads/2020/07/ai-robot-1.jpg', width=300)

video_file = open('myvideo.mp4', 'rb')
video_bytes = video_file.read()

st.video(video_bytes)
