<template>
  <div>
    <div class="card">
        <div class="top">
            <div class="logo">
                <img src="../assets/logo.png" alt="">
            </div>
            <div class="eye">
                <div v-if="show" @click="hideNumber">
                    <img src="../assets/lock.svg" alt="">
                </div>
                <div  v-else @click="showNumber">
                    <img src="../assets/open.svg" alt="">
                </div>
            </div>
        </div>
        <div class="middle">
            <div class="digits" v-if="show">
                <span>9784</span>
                <span>9784</span>
                <span>9784</span>
                <span>9784</span>
            </div>
            <div class="digits" v-else>
                <span>••••</span>
                <span>••••</span>
                <span>••••</span>
                <span>9784</span>
            </div>
        </div>
        <div class="bottom">
            <div class="cardholder">
                <p>Cardholder Name</p>
            </div>
            <div class="validity">
                <div class="col1">
                    <div class="valid">
                        <p>VALID</p>
                        <p>THRU</p>
                    </div>
                    <div class="num">
                        <p>10/12</p>
                    </div>
                </div>
                <div class="col2">
                    <div class="valid">
                        <p>CVV</p>
                    </div>
                    <div class="num">
                        <p>•••</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            show: false,
        }
    },
    methods: {
        showNumber() {
            this.show = true;
        },
        hideNumber() {
            this.show = false;
        }
    }

}
</script>

<style scoped>
.card {
    max-width: 500px;
    height: 305px;
    background: url('../assets/patricia-icon.png'), #131313;
    background-repeat: no-repeat;
    border: 1px solid #000000;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 35px;
}
.digits {
    font-family: Graphik;
    font-style: normal;
    font-weight: normal;
    font-size: 23px;
    line-height: 29px;
    letter-spacing: 0.08em;
    color: #D3DCE6;
    border: 1px solid #000000;
}
.digits {
    display: flex;
    justify-content: space-between;
    padding: 0 35px;
}
.bottom {
    display: flex;
    justify-content: space-between;
    padding: 0 35px;
}
.cardholder {
    font-family: Graphik;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 23px;
    color: #D3DCE6;
}
.validity {
    display: flex;
}
.col1, .col2 {
    display: flex;
    align-items: center;
    margin-left: 50px;
}
.valid {
    font-family: Graphik;
    font-style: normal;
    font-weight: normal;
    font-size: 7px;
    line-height: 8px;
    color: #9DA8B6;
}
.num {
    font-family: Graphik;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 27px;
    color: #D3DCE6;
    margin-left: 20px;
}
</style>