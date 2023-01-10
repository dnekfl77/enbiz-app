<template></template>

<script lang="ts" setup>
onMounted(async () => {
  const route = useRoute();

  console.log('route.params:', route.params);
  console.log('route.query:', route.query);

  const {
    data: { value: responeData },
  } = await useAsyncData('pass', () => {
    return $fetch('/api/sample/certification/decryptNiceData', {
      method: 'post',
      body: {
        encodeData: 'AgAFRzczNzW246CKfSgDY92nqzK0itszUhNrMgScOTLDGYStaRamt7CNPRXwSRHDODfV+lsEk1y2VI6kyL0t646WWEGlNr4qqGv+XwmDpbYkLMlYKt2yJauyNbTQ2WJ05CsotjY8vMFOI+xRob+zfamOqIGNClV1L/dNUcRX+s/xVkMOHZbkDNgHAOZorwERfjEVN+JrZmTkoPNMWlLeJwkrW2v/ydxsdGuSR0SgXMYFJq3hO4t2aHCShWL/OfLNaY9w1Ks5p1i26aRUkhW17QpTjqBJEJu081seLW3PNrfip76d49pULq8NLnh9v+Tz5bM3VDPPCQ3h4MSp2FXJFtnU+vjMwndPK5hyxtjHH0fTCo9GnhraSOxm/+0gW6Wlekj1A/VssqRXrSkOVkta1zlKuiAGXmoDtzHw0amFGJIwaDR57x6F32VSS+CyRmqMzC77K4v82Zt+/Xc8x2vlMbWu64lAX2USwPZ0R/u4uO8kZH1+NijmahJ94RjGaZvymPVGRZnA05pbht1ew48waPSor7c5Ayxd2DFqrQYXCDQ3wONmiNkJ0nvT9afKME+4RnXp26RhtRRkC/7dZSQU7Xq6R2QKF0hBEB7FaaFVG5YLEq/xMikhwPY9Q7F4uEsJ+CdQk9ufcnW+nHIBtQW5xtuTPi5XBUDwCYAa2dM+eF7jQin7vBZyIQ=='
      },
      cache: 'no-cache',
    mode: 'cors',
    })
  });

  console.log('responeData:', responeData);

  alert('인증 완료되었습니다.');
});
</script>
