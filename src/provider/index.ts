// https://www.terraform.io/docs/providers/consul
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConsulProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul#address ConsulProvider#address}
  */
  readonly address?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul#ca_file ConsulProvider#ca_file}
  */
  readonly caFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul#ca_path ConsulProvider#ca_path}
  */
  readonly caPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul#ca_pem ConsulProvider#ca_pem}
  */
  readonly caPem?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul#cert_file ConsulProvider#cert_file}
  */
  readonly certFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul#cert_pem ConsulProvider#cert_pem}
  */
  readonly certPem?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul#datacenter ConsulProvider#datacenter}
  */
  readonly datacenter?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul#http_auth ConsulProvider#http_auth}
  */
  readonly httpAuth?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul#insecure_https ConsulProvider#insecure_https}
  */
  readonly insecureHttps?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul#key_file ConsulProvider#key_file}
  */
  readonly keyFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul#key_pem ConsulProvider#key_pem}
  */
  readonly keyPem?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul#namespace ConsulProvider#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul#scheme ConsulProvider#scheme}
  */
  readonly scheme?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul#token ConsulProvider#token}
  */
  readonly token?: string;
  /**
  * Alias name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul#alias ConsulProvider#alias}
  */
  readonly alias?: string;
  /**
  * header block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul#header ConsulProvider#header}
  */
  readonly header?: ConsulProviderHeader[] | cdktf.IResolvable;
}
export interface ConsulProviderHeader {
  /**
  * The header name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul#name ConsulProvider#name}
  */
  readonly name: string;
  /**
  * The header value
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul#value ConsulProvider#value}
  */
  readonly value: string;
}

export function consulProviderHeaderToTerraform(struct?: ConsulProviderHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/consul consul}
*/
export class ConsulProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "consul";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/consul consul} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConsulProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ConsulProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'consul',
      terraformGeneratorMetadata: {
        providerName: 'consul',
        providerVersion: '2.16.2',
        providerVersionConstraint: '~> 2.16'
      },
      terraformProviderSource: 'consul'
    });
    this._address = config.address;
    this._caFile = config.caFile;
    this._caPath = config.caPath;
    this._caPem = config.caPem;
    this._certFile = config.certFile;
    this._certPem = config.certPem;
    this._datacenter = config.datacenter;
    this._httpAuth = config.httpAuth;
    this._insecureHttps = config.insecureHttps;
    this._keyFile = config.keyFile;
    this._keyPem = config.keyPem;
    this._namespace = config.namespace;
    this._scheme = config.scheme;
    this._token = config.token;
    this._alias = config.alias;
    this._header = config.header;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this._address;
  }
  public set address(value: string | undefined) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // ca_file - computed: false, optional: true, required: false
  private _caFile?: string; 
  public get caFile() {
    return this._caFile;
  }
  public set caFile(value: string | undefined) {
    this._caFile = value;
  }
  public resetCaFile() {
    this._caFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caFileInput() {
    return this._caFile;
  }

  // ca_path - computed: false, optional: true, required: false
  private _caPath?: string; 
  public get caPath() {
    return this._caPath;
  }
  public set caPath(value: string | undefined) {
    this._caPath = value;
  }
  public resetCaPath() {
    this._caPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caPathInput() {
    return this._caPath;
  }

  // ca_pem - computed: false, optional: true, required: false
  private _caPem?: string; 
  public get caPem() {
    return this._caPem;
  }
  public set caPem(value: string | undefined) {
    this._caPem = value;
  }
  public resetCaPem() {
    this._caPem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caPemInput() {
    return this._caPem;
  }

  // cert_file - computed: false, optional: true, required: false
  private _certFile?: string; 
  public get certFile() {
    return this._certFile;
  }
  public set certFile(value: string | undefined) {
    this._certFile = value;
  }
  public resetCertFile() {
    this._certFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certFileInput() {
    return this._certFile;
  }

  // cert_pem - computed: false, optional: true, required: false
  private _certPem?: string; 
  public get certPem() {
    return this._certPem;
  }
  public set certPem(value: string | undefined) {
    this._certPem = value;
  }
  public resetCertPem() {
    this._certPem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certPemInput() {
    return this._certPem;
  }

  // datacenter - computed: false, optional: true, required: false
  private _datacenter?: string; 
  public get datacenter() {
    return this._datacenter;
  }
  public set datacenter(value: string | undefined) {
    this._datacenter = value;
  }
  public resetDatacenter() {
    this._datacenter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datacenterInput() {
    return this._datacenter;
  }

  // http_auth - computed: false, optional: true, required: false
  private _httpAuth?: string; 
  public get httpAuth() {
    return this._httpAuth;
  }
  public set httpAuth(value: string | undefined) {
    this._httpAuth = value;
  }
  public resetHttpAuth() {
    this._httpAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpAuthInput() {
    return this._httpAuth;
  }

  // insecure_https - computed: false, optional: true, required: false
  private _insecureHttps?: boolean | cdktf.IResolvable; 
  public get insecureHttps() {
    return this._insecureHttps;
  }
  public set insecureHttps(value: boolean | cdktf.IResolvable | undefined) {
    this._insecureHttps = value;
  }
  public resetInsecureHttps() {
    this._insecureHttps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureHttpsInput() {
    return this._insecureHttps;
  }

  // key_file - computed: false, optional: true, required: false
  private _keyFile?: string; 
  public get keyFile() {
    return this._keyFile;
  }
  public set keyFile(value: string | undefined) {
    this._keyFile = value;
  }
  public resetKeyFile() {
    this._keyFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyFileInput() {
    return this._keyFile;
  }

  // key_pem - computed: false, optional: true, required: false
  private _keyPem?: string; 
  public get keyPem() {
    return this._keyPem;
  }
  public set keyPem(value: string | undefined) {
    this._keyPem = value;
  }
  public resetKeyPem() {
    this._keyPem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPemInput() {
    return this._keyPem;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this._namespace;
  }
  public set namespace(value: string | undefined) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // scheme - computed: false, optional: true, required: false
  private _scheme?: string; 
  public get scheme() {
    return this._scheme;
  }
  public set scheme(value: string | undefined) {
    this._scheme = value;
  }
  public resetScheme() {
    this._scheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeInput() {
    return this._scheme;
  }

  // token - computed: false, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this._token;
  }
  public set token(value: string | undefined) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // header - computed: false, optional: true, required: false
  private _header?: ConsulProviderHeader[] | cdktf.IResolvable; 
  public get header() {
    return this._header;
  }
  public set header(value: ConsulProviderHeader[] | cdktf.IResolvable | undefined) {
    this._header = value;
  }
  public resetHeader() {
    this._header = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address: cdktf.stringToTerraform(this._address),
      ca_file: cdktf.stringToTerraform(this._caFile),
      ca_path: cdktf.stringToTerraform(this._caPath),
      ca_pem: cdktf.stringToTerraform(this._caPem),
      cert_file: cdktf.stringToTerraform(this._certFile),
      cert_pem: cdktf.stringToTerraform(this._certPem),
      datacenter: cdktf.stringToTerraform(this._datacenter),
      http_auth: cdktf.stringToTerraform(this._httpAuth),
      insecure_https: cdktf.booleanToTerraform(this._insecureHttps),
      key_file: cdktf.stringToTerraform(this._keyFile),
      key_pem: cdktf.stringToTerraform(this._keyPem),
      namespace: cdktf.stringToTerraform(this._namespace),
      scheme: cdktf.stringToTerraform(this._scheme),
      token: cdktf.stringToTerraform(this._token),
      alias: cdktf.stringToTerraform(this._alias),
      header: cdktf.listMapper(consulProviderHeaderToTerraform, true)(this._header),
    };
  }
}
