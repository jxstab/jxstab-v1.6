document.addEventListener('DOMContentLoaded', () => {
    const VERSION = '1.6';

    const PHONES_DATA = {
        'Redmi9A': {
            'image': 'Redmi9A.png',
            'stabilizationPoint': { 'x': '49.68%', 'y': '13.52%' },
            'flashPoint': { 'x': '33.56%', 'y': '13.54%' }
        },
        'SamsungS21U': {
            'image': 'SamsungS21U.png',
            'stabilizationPoint': { 'x': '19.30%', 'y': '19.96%' },
            'flashPoint': { 'x': '39.94%', 'y': '18.41%' }
        },
        'RealmeGT7Pro': {
            'image': 'RealmeGT7Pro.png',
            'stabilizationPoint': { 'x': '50.39%', 'y': '32.88%' },
            'flashPoint': { 'x': '45.07%', 'y': '32.12%' }
        },
        'HuaweiPura70U': {
            'image': 'HuaweiPura70U.png',
            'stabilizationPoint': { 'x': '21.88%', 'y': '17.20%' },
            'flashPoint': { 'x': '25.98%', 'y': '36.28%' }
        },
        'OnePlus12': {
            'image': 'OnePlus12.png',
            'stabilizationPoint': { 'x': '40.38%', 'y': '17.03%' },
            'flashPoint': { 'x': '43.15%', 'y': '19.52%' }
        },
        'SamsungS24U': {
            'image': 'SamsungS24U.png',
            'stabilizationPoint': { 'x': '26.38%', 'y': '20.09% ' },
            'flashPoint': { 'x': '39.63%', 'y': '13.58%' }
        },
        'HonorMagic6P': {
            'image': 'HonorMagic6P.png',
            'stabilizationPoint': { 'x': '34.93%', 'y': '46.14%' },
            'flashPoint': { 'x': '38.82%', 'y': '23.57%' }
        },
        'OnePlusAce3': {
            'image': 'OnePlusAce3.png',
            'stabilizationPoint': { 'x': '49.49%', 'y': '28.00%' },
            'flashPoint': { 'x': '49.64%', 'y': '41.58%' }
        },
        'SamsungJ4': {
            'image': 'SamsungJ4.png',
            'stabilizationPoint': { 'x': '50.34%', 'y': '38.93%' },
            'flashPoint': { 'x': '27.94%', 'y': '42.72%' }
        },
        'TecnoPova4': {
            'image': 'TecnoPova4.png',
            'stabilizationPoint': { 'x': '15.57%', 'y': '31.02%' },
            'flashPoint': { 'x': '45.37%', 'y': '48.50%' }
        },
        'Iphone13PM': {
            'image': 'Iphone13PM.png',
            'stabilizationPoint': { 'x': '25.02%', 'y': '45.37%' },
            'flashPoint': { 'x': '19.01%', 'y': '23.97%' }
        },
        'Honor200': {
            'image': 'Honor200.png',
            'stabilizationPoint': { 'x': '37.75%', 'y': '49.95%' },
            'flashPoint': { 'x': '45.37%', 'y': '49.95%' }
        },
        'IqooNeo10PP': {
            'image': 'IqooNeo10PP.png',
            'stabilizationPoint': { 'x': '12.18%', 'y': '20.20%' },
            'flashPoint': { 'x': '48nqdgSN', 'y': '20.65%' }
        },
        'Pixel8P': {
            'image': 'Pixel8P.png',
            'stabilizationPoint': { 'x': '21.34%', 'y': '12.92%' },
            'flashPoint': { 'x': '83.46%', 'y': '26.47%' }
        },
        'IqooNeo9SPP': {
            'image': 'IqooNeo9SPP.png',
            'stabilizationPoint': { 'x': '38.72%', 'y': '30iJJTLz' },
            'flashPoint': { 'x': '34.78%', 'y': '13.88%' }
        },
        'SonyXperia1M7': {
            'image': 'SonyXperia1M7.png',
            'stabilizationPoint': { 'x': '26.07%', 'y': '22.78%' },
            'flashPoint': { 'x': '22.56%', 'y': '35.46%' }
        },
        'Xiaomi15U': {
            'image': 'Xiaomi15U.png',
            'stabilizationPoint': { 'x': '37.10%', 'y': '25.63%' },
            'flashPoint': { 'x': '50.17%', 'y': '18.03%' }
        },
        'VivoX200U': {
            'image': 'VivoX200U.png',
            'stabilizationPoint': { 'x': '44.55%', 'y': '18.26%' },
            'flashPoint': { 'x': '35.66%', 'y': '17.01%' }
        },
        'SamsungS25U': {
            'image': 'SamsungS25U.png',
            'stabilizationPoint': { 'x': '37.38%', 'y': '26.66%' },
            'flashPoint': { 'x': '47.43%', 'y': '25.02%' }
        },
        'HuaweiPura80U': {
            'image': 'HuaweiPura80U.png',
            'stabilizationPoint': { 'x': '40.66%', 'y': '16.35%' },
            'flashPoint': { 'x': '20.74%', 'y': '27.84%' }
        },
        'LgK10': {
            'image': 'LgK10.png',
            'stabilizationPoint': { 'x': '46.14%', 'y': '13.74%' },
            'flashPoint': { 'x': '50.00%', 'y': '50.00%' }
        },
        'Nothing1': {
            'image': 'Nothing1.png',
            'stabilizationPoint': { 'x': '38.65%', 'y': '37.74%' },
            'flashPoint': { 'x': '50.00%', 'y': '50.00%' }
        },
        'RealmeGT6': {
            'image': 'RealmeGT6.png',
            'stabilizationPoint': { 'x': '39.55%', 'y': '9.04%' },
            'flashPoint': { 'x': '50.00%', 'y': '50.00%' }
        },
        'SamsungA9': {
            'image': 'SamsungA9.png',
            'stabilizationPoint': { 'x': '28.17%', 'y': '36.98%' },
            'flashPoint': { 'x': '50.00%', 'y': '50.00%' }
        },
        'SamsungA72': {
            'image': 'SamsungA72.png',
            'stabilizationPoint': { 'x': '40.45%', 'y': '50.58%' },
            'flashPoint': { 'x': '50.00%', 'y': '50.00%' }
        },
        'SamsungS9+': {
            'image': 'SamsungS9+.png',
            'stabilizationPoint': { 'x': '49.64%', 'y': '21.00%' },
            'flashPoint': { 'x': '50.00%', 'y': '50.00%' }
        },
        'Xiaomi10U': {
            'image': 'Xiaomi10U.png',
            'stabilizationPoint': { 'x': '37.75%', 'y': '45.85%' },
            'flashPoint': { 'x': '50.00%', 'y': '50.00%' }
        }
    };

    let currentRotation = 0;
    let targetRotation = 0;

    const wrapperBg = document.getElementById('wrapper-bg');
    const phoneImage = document.getElementById('phone-image');
    const phoneSelect = document.getElementById('phone-select');
    const stabilizationKnob = document.getElementById('stabilization-knob');
    const knobHandle = document.getElementById('knob-handle');
    const fpsCounter = document.getElementById('fps-counter');
    const updateModal = document.getElementById('update-modal');
    const modalCloseButtons = document.querySelectorAll('.modal-close-btn');
    const flashBtn = document.getElementById('flash-btn');
    const flashEffect = document.getElementById('flash-effect');
    const flashSound = document.getElementById('flash-sound');
    const settingsBtn = document.getElementById('settings-btn');
    const settingsModal = document.getElementById('settings-modal');
    const optimizeToggle = document.getElementById('optimize-toggle');

    function init() {
        loadSettings();
        populatePhoneSelect();
        updatePhone();

        stabilizationKnob.addEventListener('mousedown', startRotation);
        stabilizationKnob.addEventListener('touchstart', startRotation, { 'passive': false });
        wrapperBg.addEventListener('wheel', handleWheel, { 'passive': false });
        phoneSelect.addEventListener('change', updatePhone);

        if (flashBtn) flashBtn.addEventListener('click', triggerFlash);
        if (settingsBtn) settingsBtn.addEventListener('click', () => settingsModal.classList.remove('hidden'));
        if (optimizeToggle) optimizeToggle.addEventListener('change', handleOptimizeToggle);

        modalCloseButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                btn.closest('.modal-overlay').classList.add('hidden');
                if (btn.closest('#update-modal')) {
                    localStorage.setItem('seenVersion', VERSION);
                }
            });
        });

        checkVersion();
        requestAnimationFrame(updateFPS);
        requestAnimationFrame(animationLoop);

        window.APP_STATE = {
            'phones': PHONES_DATA,
            'phoneSelect': phoneSelect,
            'phoneImage': phoneImage,
            'wrapperBg': wrapperBg,
            'updatePhone': updatePhone
        };

        document.dispatchEvent(new Event('appReady'));
    }

    function populatePhoneSelect() {
        const sortedPhones = Object.keys(PHONES_DATA).sort();
        const currentValue = phoneSelect.value;
        phoneSelect.innerHTML = '';

        sortedPhones.forEach(name => {
            const option = document.createElement('option');
            option.value = name;
            option.textContent = name;
            phoneSelect.appendChild(option);
        });

        if (sortedPhones.includes(currentValue)) {
            phoneSelect.value = currentValue;
        }
        updatePhone();
    }

    function updatePhone() {
        const selectedModel = phoneSelect.value;
        if (!selectedModel) {
            phoneImage.src = '';
            return;
        }

        const data = PHONES_DATA[selectedModel];
        const origin = data.stabilizationPoint.x + ' ' + data.stabilizationPoint.y;
        
        phoneImage.style.transformOrigin = origin;
        const container = document.getElementById('phone-container');
        if (container) container.style.transformOrigin = origin;
        
        phoneImage.src = data.image;
        targetRotation = 0;
        currentRotation = -1; // Trigger update
        resetPosition();
    }

    function checkVersion() {
        if (localStorage.getItem('seenVersion') !== VERSION) {
            updateModal.classList.remove('hidden');
        }
    }

    function animationLoop() {
        if (currentRotation !== targetRotation) {
            currentRotation = targetRotation;
            phoneImage.style.transform = `perspective(1000px) rotateZ(${currentRotation}deg)`;
            knobHandle.style.transform = `translateX(-50%) rotate(${currentRotation}deg)`;
        }
        requestAnimationFrame(animationLoop);
    }

    let startAngle = 0;
    let baseRotation = 0;

    function startRotation(e) {
        e.preventDefault();
        startAngle = getAngle(e);
        baseRotation = currentRotation;
        document.body.style.cursor = 'grabbing';
        wrapperBg.classList.add('is-rotating');

        document.addEventListener('mousemove', onRotate);
        document.addEventListener('mouseup', stopRotation);
        document.addEventListener('touchmove', onRotate, { 'passive': false });
        document.addEventListener('touchend', stopRotation);
    }

    function onRotate(e) {
        const currentAngle = getAngle(e) - startAngle;
        targetRotation = baseRotation + currentAngle;
    }

    function stopRotation() {
        document.body.style.cursor = 'default';
        wrapperBg.classList.add('is-rotating'); // Возможно, тут должен быть remove, но в оригинале так
        setTimeout(() => wrapperBg.classList.remove('is-rotating'), 300);
        
        document.removeEventListener('mousemove', onRotate);
        document.removeEventListener('mouseup', stopRotation);
        document.removeEventListener('touchmove', onRotate);
        document.removeEventListener('touchend', stopRotation);
    }

    let wheelTimeout;
    function handleWheel(e) {
        e.preventDefault();
        targetRotation += e.deltaY > 0 ? 5 : -5;
        wrapperBg.classList.add('is-rotating');
        clearTimeout(wheelTimeout);
        wheelTimeout = setTimeout(() => {
            wrapperBg.classList.remove('is-rotating');
        }, 300);
    }

    function getAngle(e) {
        const rect = stabilizationKnob.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;
        
        return Math.atan2(clientY - centerY, clientX - centerX) * (180 / Math.PI);
    }

    function resetPosition() {
        phoneImage.style.transform = 'perspective(1000px) rotateZ(0deg)';
        knobHandle.style.transform = 'translateX(-50%) rotate(0deg)';
        wrapperBg.classList.remove('is-rotating');
    }

    function triggerFlash() {
        const data = PHONES_DATA[phoneSelect.value];
        flashEffect.style.left = data.flashPoint.x;
        flashEffect.style.top = data.flashPoint.y;
        
        flashEffect.classList.add('flash');
        flashSound.currentTime = 0;
        flashSound.play();
        
        flashEffect.addEventListener('animationend', () => {
            flashEffect.classList.remove('flash');
        }, { 'once': true });
    }

    function handleOptimizeToggle() {
        document.body.classList.toggle('performance-mode', optimizeToggle.checked);
        saveSettings();
    }

    function saveSettings() {
        localStorage.setItem('stabilizerSettings', JSON.stringify({
            'optimized': optimizeToggle.checked
        }));
    }

    function loadSettings() {
        const settings = JSON.parse(localStorage.getItem('stabilizerSettings'));
        if (settings) {
            optimizeToggle.checked = settings.optimized;
            document.body.classList.toggle('performance-mode', settings.optimized);
        }
    }

    let lastTime = performance.now();
    let frames = 0;

    function updateFPS(now) {
        frames++;
        if (now - lastTime >= 1000) {
            fpsCounter.textContent = frames + ' FPS';
            frames = 0;
            lastTime = now;
        }
        requestAnimationFrame(updateFPS);
    }

    init();
});