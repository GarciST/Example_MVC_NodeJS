/**
 * Configuration Options for connect to MongoDB
 */
export const MongoDBconfiguration = {
    address: process.env.MONGOIP || "localhost",
    port: process.env.MONGOPORT || "27017",
    user: "academy",
    password: "academy",
    databaseName: "academy",
    /**
     * Join URI connect 
     */
    getURI: function () {
      return "mongodb://" +
        this.user + ":" +
        this.password + "@" +
        this.address + ":" +
        this.port + "/" +
        this.databaseName;
    }
};

export const ExpressConfiguration = {
    port: process.env.PORT || '3000'
};